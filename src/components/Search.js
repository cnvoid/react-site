import React from 'react'
import { Layout, Form, Button, Select, Input, DateRangePicker, DatePicker } from 'element-react'
class Search extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      form: {
        a: '1233'
      }
    }
    this.list = [
      {
        name: 'roleName',
        label: '角色名称',
        dftValue: '沙雕一号',
        type: 'input',
        prop: {}
      },
      {
        name: 'roleStatus',
        label: '角色状态',
        type: 'select',
        opts: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }]
      },
      {
        name: 'dateTime',
        label: '选择时间段',
        type: 'dateTimeRange'
      },
    ]
    console.log('>>father props:', props)
  }

  propToState() {
    let form = {}
    this.list.map((item) => {
      form[item.name] = item.dftValue || ''
    })
    this.setState({
      form: Object.assign({}, form)
    });
  }

  componentDidMount() {

    // this.refs.current.focus(); // 操作子组件

  }

  getFormItem(itemJson) {
    console.log('>>>',itemJson)
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

  render() {
    let cols = this.list.map((item, i) => {
      return (
        <Layout.Col span={[4,6,7,7][i%4]}>
          <Form.Item>
            {
          this.getFormItem(item)
          }
          </Form.Item>
        </Layout.Col>
      )
    })

    let rows = []

    for(let i = 0; i < Math.ceil(this.list.length/3); i++){
      rows[i] = cols.slice(i * 3, i * 3 + 3)
      rows[i].push(i==0? <Layout.Col span="4">
      <Form.Item>
        <Button type="primary" onClick={() => { this.props.onSubmit(this.state.form) }}>查询</Button>
        <Button onClick={this.handleReset.bind(this)}>重置</Button>
      </Form.Item>
    </Layout.Col> :'')

    rows[i] =  <Layout.Row gutter="20">
      {rows[i] }
    </Layout.Row>
    }

    console.log('rows',rows)
    return (
      <div className="search" >
        <Form model={this.state.form} className="demo-ruleForm">
          {rows}

        </Form>
      </div>

    )
  }
}

export default Search