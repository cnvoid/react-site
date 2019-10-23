import React from 'react'
import { Layout, Form, Button, Select, Input, DateRangePicker, DatePicker } from 'element-react'
class Search extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      form: {
      },
      isShowExpand: props.list.length > 3,
      isExpanded: false,
      list: (props.list || []).slice(0, 3)
    }
    this.list = props.list

    console.log('>>father props:', props)
  }

  propToState() {
    let form = {}
    this.state.list.map((item) => {
      form[item.name] = item.dftValue || ''
    })
    this.setState({
      form: Object.assign({}, form)
    });
  }

  getFormItem(itemJson) {
    console.log('>>>', itemJson)
    let typeMap = {
      'input': <Input value={this.state.form[itemJson.name]} onChange={this.onChange.bind(this, itemJson.name)} placeholder={itemJson.placeholder || itemJson.label}></Input>,
      'select': <Select value={this.state.form[itemJson.name]} onChange={this.onChange.bind(this, itemJson.name)} placeholder={itemJson.placeholder || itemJson.label}>
        {
          (itemJson.opts || []).map(el => {
            return <Select.Option key={el.value} label={el.label} value={el.value} />
          })
        }
      </Select>,
      'datetimerange': <DateRangePicker
        value={this.state.form[itemJson.name]} placeholder={itemJson.placeholder || itemJson.label}
        isShowTime={true}
        format={'yyyy-MM-dd hh:mm:ss'}
        onChange={this.onChange.bind(this, itemJson.name)}
      />
    }
    return typeMap[(itemJson.type + '').toLowerCase()]

  }

  handleReset() {
    // e.preventDefault();
    console.log('reset', this.refs)
    // this.ref.form.resetFields();
    this.setState({
      form: Object.assign({}, { a: '' })
    });
  }

  onChange(key, value) {
    this.setState({
      form: Object.assign({}, this.state.form, { [key]: value })
    });
  }

  clickExpand() {
    this.setState({
      isExpanded: !this.state.isExpanded,
      list: this.state.isExpanded ? this.list.slice(0, 3) : this.list.slice()
    });

  }

  render() {
    let cols = this.state.list.map((item, i) => {
      return (
        <Layout.Col span={[7, 6, 7][(i + 1) % 3]}>
          <Form.Item>
            {
              this.getFormItem(item)
            }
          </Form.Item>
        </Layout.Col>
      )
    })

    let rows = []

    for (let i = 0; i < Math.ceil(this.state.list.length / 3); i++) {
      rows[i] = cols.slice(i * 3, i * 3 + 3)
      rows[i].push(i == 0 ? <Layout.Col span="4">
        <Form.Item>
          <Button type="primary" onClick={() => { this.props.onSubmit(this.state.form) }}>查询</Button>
          <Button onClick={this.handleReset.bind(this)}>重置</Button>
        </Form.Item>
      </Layout.Col> : '')

      rows[i] = <Layout.Row gutter="20">
        {rows[i]}
      </Layout.Row>
    }

    return (
      <div className="search" >
        <Form model={this.state.form} className="demo-ruleForm">
          {rows}
        </Form>
        {this.state.isShowExpand ? <div className="search-line relative">
          <div className="text bg-fff pointer c-blue" onClick={this.clickExpand.bind(this)}>{this.state.isExpanded ? '收起更多项' : '展开更多项'}</div>
        </div> : ''}

      </div>

    )
  }
}

export default Search