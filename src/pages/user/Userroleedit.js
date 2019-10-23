import React from 'react';
import GenForm from '@/components/Genform'

class UserRoleEdit extends React.Component {
  constructor(props) {
    super(props)
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
      {
        name: 'roleName2',
        label: '角色名称',
        dftValue: '沙雕一号',
        type: 'input',
        prop: {}
      },
      {
        name: 'roleStatus2',
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
        name: 'dateTime2',
        label: '选择时间段',
        type: 'dateTimeRange'
      },
      {
        name: 'dateTime3',
        label: '选择时间段',
        type: 'dateTimeRange'
      },
    ]
  }
  render() {
    return <div className="line-top">
      <GenForm list={this.list}></GenForm>
    </div>
  }
}

export default UserRoleEdit