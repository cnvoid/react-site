import React from 'react';
import { connect } from 'react-redux'
import { clickTopNav } from '@/store/actions/menu.act'
import Search from '@/components/Search'
import Operate from '@/components/Operate'
import { Table, Pagination, Button, Popover } from 'element-react'

class Topnav extends React.Component {
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


    this.state = {
      columns: [
        {
          label: "日期",
          prop: "date",
          width: 180,
          sortable: true
        },
        {
          label: "姓名",
          prop: "name",
          width: 180,
          sortable: 'custom',
          showOverflowTooltip: true
        },
        {
          label: "地址",
          prop: "address",
          render: (item, alt) => {
            let len = (item[alt.prop]).length * 14
            return (<span >
              {
                len > alt.realWidth ? 
                <Popover placement={'bottom-start'} width="300" trigger="hover" content={(item[alt.prop])}>
                  <div className="oneline">{(item[alt.prop])}</div>
                </Popover>
                : <div className="oneline">{(item[alt.prop])}</div>
              }
            </span>)
          }
        },
        {
          label: "操作",
          fixed: 'right',
          minWidth: 200,
          render: (item) => {
            return (<Operate onClickOperate={this.onClickOperate.bind(this, item)}></Operate>)
          }
        }
      ],
      data: [{
        date: '2016-05-02',
        name: '赵小虎赵小虎赵小虎赵小虎赵小虎赵小虎赵小虎赵小虎赵小虎赵小虎赵小虎赵小虎赵小虎赵小虎赵小虎赵小虎赵小虎赵小虎赵小虎赵小虎赵小虎赵小虎赵小虎赵小虎赵小虎赵小虎赵小虎赵小虎赵小虎赵小虎赵小虎赵小虎赵小虎赵小虎赵小虎赵小虎赵小虎赵小虎赵小虎赵小虎赵小虎赵小虎赵小虎赵小虎赵小虎赵小虎赵小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '钱小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-01',
        name: '孙小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-03',
        name: '李小虎',
        address: '上海市普陀区金沙江路 1518 弄海市普陀区金沙江路 1518 弄海市普陀区金沙江路 1518 弄海市普陀区金沙江路 1518 弄海市普陀区金沙江路 1518 弄海市普陀区金沙江路 1518 弄海市普陀区金沙江路 1518 弄海市普陀区金沙江路 1518 弄'
      }]
    }
  }

  onClickOperate(OperateType,a) {
    console.log(OperateType,a)
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
      <>
        <Search onSubmit={this.search} list={this.list}></Search>
        <div>
          <Button type="primary" per="Add">增加</Button>
        </div>
        <Table
          className="mt-10"
          emptyText="暂无数据"
          style={{ width: '100%' }}
          columns={this.state.columns}
          data={this.state.data}
          border={true}
          stripe={true}
          onSortChange={this.handleSort.bind(this)}
        />
        <div className="table center mt-20">
          <Pagination layout="total, sizes, prev, pager, next" total={4} pageSizes={[10, 20, 30, 50]} pageSize={10} currentPage={1} />
        </div>

      </>
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
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Topnav)