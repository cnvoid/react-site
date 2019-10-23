import React from 'react';
import { connect } from 'react-redux'
import { clickTopNav } from '@/store/actions/menu.act'
import Search from '@/components/Search'
import { Pagination, Tree, Button, Popover } from 'element-react'
import Table from '@/components/Table'
import { goTo } from '@/route'

class Userrole extends React.Component {
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

    this.colData = [
      { prop: 'date', label: '日期', isShow: true, width: 150, sortable: true },
      { prop: 'name', label: '名字', isShow: true, width: 1080, sortable: true },
      { prop: 'address', label: '地址', isShow: true, sortable: true },

    ]

    this.datas = [{
      date: '2016-05-02',
      age: 18,
      name: '赵小虎赵小虎赵小虎赵小虎赵小虎赵小虎赵小虎赵小虎赵小虎赵小虎赵小虎赵小虎赵小虎赵小虎赵小虎赵小虎赵小虎赵小虎赵小虎赵小虎赵小虎赵小虎赵小虎赵小虎赵小虎赵小虎赵小虎赵小虎赵小虎赵小虎赵小虎赵小虎赵小虎赵小虎赵小虎赵小虎赵小虎赵小虎赵小虎赵小虎赵小虎赵小虎赵小虎赵小虎赵小虎赵小虎赵小虎',
      address: '上海市普陀区金沙江路 1518 弄'
    }, {
      date: '2016-05-04',
      name: '钱小虎',
      age: 18,

      address: '上海市普陀区金沙江路 1518 弄'
    }, {
      date: '2016-05-01',
      name: '孙小虎',
      age: 18,
      address: '上海市普陀区金沙江路 1518 弄'
    }, {
      date: '2016-05-03',
      name: '李小虎',
      age: 18,
      address: '上海市普陀区金沙江路 1518 弄海市普陀区金沙江路 1518 弄海市普陀区金沙江路 1518 弄海市普陀区金沙江路 1518 弄海市普陀区金沙江路 1518 弄海市普陀区金沙江路 1518 弄海市普陀区金沙江路 1518 弄海市普陀区金沙江路 1518 弄'
    }]
  }

  onClickOperate(OperateType, a) {
    console.log(OperateType, a)
  }

  search(mode) {
    console.log('son to father', mode)

  }

  handleSort(data) {
    console.log('自定义');
    console.log(data.column);
    console.log(data.prop);
    console.log(data.order);
  }


  render() {

    let navs = this.props.topNav || []
    return (
      <div className="pd-v-20">
        <div>

        </div>
        <div>


          <Table
            className="pt-20"
            clickPageOperate={this.props.clickPageOperate}
            colData={this.colData}
            itemOperates={['view', 'edit', 'switchOn', 'auth', 'muteOn']}
            datas={this.datas}
          />
          <div className="table center mt-20">
            <Pagination layout="total, sizes, prev, pager, next" total={4} pageSizes={[10, 20, 30, 50]} pageSize={10} currentPage={1} />
          </div>
        </div>

      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    topNav: state.topNav,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    selectTopNav(data) {
      dispatch(clickTopNav(data))
      dispatch({ type: 'SET_SIDE_NAV', data: data.sub })
    },
    clickPageOperate(type) {
      dispatch({
        type: 'SET_LAST_CRUMBS', data: {
          name: '添加角色',
          // to: '-'
        }
      })
      goTo('/setting/user/role-add')
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Userrole)