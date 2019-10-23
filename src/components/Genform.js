import React from 'react'
import { Form, DatePicker, Select, Input, DateRangePicker, TimePicker, Switch, Button, Layout, Checkbox, Radio } from 'element-react'
import { connect } from 'react-redux'
class GenForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      form: {
        name: 'fffgbfgytyt',
        region: 'shanghai',
        date1: null,
        date2: null,
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      },
      rules: {
        // name: [
        //   { required: true, message: '请输入活动名称', trigger: 'blur' }
        // ],
        region: [
          { required: true, message: '请选择活动区域', trigger: 'change' }
        ],
        date1: [
          { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
        ],
        // date2: [
        //   { type: 'date', required: true, message: '请选择时间', trigger: 'change' }
        // ],
        type: [
          { type: 'array', required: true, message: '请至少选择一个活动性质', trigger: 'change' }
        ],
        resource: [
          { required: true, message: '请选择活动资源', trigger: 'change' }
        ],
        desc: [
          { required: true, message: '请填写活动形式', trigger: 'blur' }
        ]
      }
    };


  }
  handleSubmit(e) {
    e.preventDefault();

    this.refs.form.validate((valid) => {
      if (valid) {
        alert('submit!');
      } else {
        console.log('error submit!!');
        return false;
      }
    });
  }

  getFormItem(itemJson) {
    console.log('>>>', itemJson)
    let typeMap = {
      'input':
        <Form.Item label={itemJson.label} prop={itemJson.name} >
          <Input value={this.state.form[itemJson.name]} onChange={this.onChange.bind(this, itemJson.name)} placeholder={itemJson.placeholder || itemJson.label}></Input>
        </Form.Item>,
      'textarea':
        <Form.Item label={itemJson.label} prop={itemJson.name}>
          <Input
            type="textarea"
            autosize={true}
            placeholder="请输入内容"
          /></Form.Item>,
      'select':
        <Form.Item label={itemJson.label} prop={itemJson.name}>
          <Select value={this.state.form[itemJson.name]} onChange={this.onChange.bind(this, itemJson.name)} placeholder={itemJson.placeholder || itemJson.label}>
            {
              (itemJson.opts || []).map(el => {
                return <Select.Option key={el.value} label={el.label} value={el.value} />
              })
            }
          </Select>
        </Form.Item>,
      'datetimerange':
        <Form.Item label={itemJson.label} prop={itemJson.name} >
          <DateRangePicker
            value={this.state.form[itemJson.name]} placeholder={itemJson.placeholder || itemJson.label}
            isShowTime={true}
            format={'yyyy-MM-dd hh:mm:ss'}
            onChange={this.onChange.bind(this, itemJson.name)}
          />
        </Form.Item>
    }
    return typeMap[(itemJson.type + '').toLowerCase()]
  }

  genValidate() {

  }

  handleReset(e) {

    e.preventDefault();
    this.refs.form.resetFields();
  }

  onChange(key, value) {
    // this.setState({
    //   form: Object.assign({}, this.state.form, { [key]: value })
    // });
  }
  render() {
    let list = this.props.list || []
    console.log('><<>>', list)

    let Items = list.map((item, index) => {
      return (
        <Layout.Col span={0} className="short-item">
          {
            this.getFormItem(item)
          }
        </Layout.Col>
      )
    })
    return (
      <div className="form-area">
        
        <Form ref="form" labelPosition="top" model={this.state.form} rules={this.state.rules} labelWidth="80">
          <Layout.Row gutter={0} className="form-col">
          <Layout.Col span="24">
            <div className="flow-title">添加角444色</div>
            </Layout.Col>
            {Items}
            <Layout.Col span="24">
            <div className="flow-title">添加角444色</div>
            </Layout.Col>
            {Items}
          </Layout.Row>
        </Form>
      </div>
    )
  }

}

const mapStateToProps = (state) => {
  return {
    sideNav: state.sideNav,
  }
}

const mapDispatchToProps = (dispatch) => {

  return {
    cancel() {
      window.history.back(-1)
      dispatch({ type: 'POP_LAST_CRUMBS', data: '' })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(GenForm)