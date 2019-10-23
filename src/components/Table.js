import React from 'react';
import { connect } from 'react-redux'
import { clickTopNav } from '@/store/actions/menu.act'
import Operate from '@/components/Operate'
import { Table, Checkbox, Button, Popover } from 'element-react'

class ListTable extends React.Component {
  constructor(props) {
    super(props)

    this.colData = props.colData

    this.state = {
      colData: props.colData,
      itemOperates: props.itemOperates,
      columns: [],
      customCols: [],
      data: props.datas
    }

  }

  componentDidMount() {
    this.setState({
      columns: this.genTableCals()
    })

  }

  genTableCals() {
    let colDatas = this.state.colData
    let cols = []
    let customCols = []
    colDatas.map((item) => {
      if (item.isShow) {
        cols.push({
          label: item.label,
          prop: item.prop,
          width: item.width,
          sortable: item.sortable ? 'custom' : undefined,
          render: (item, alt) => {
            let len = (item[alt.prop] || '').length * 14
            return (<span className="relative">
              {
                len > alt.realWidth ?
                  <Popover placement="top"
                    width={alt.realWidth}
                    trigger="click"
                    visibleArrow={false}
                    content={(item[alt.prop])}>
                    <div className="oneline">{(item[alt.prop])}</div>
                  </Popover>
                  : <div className="oneline">{(item[alt.prop])}</div>
              }
            </span>)
          }
        })
        customCols.push(item.prop)
      }
      return true
    })
    if (this.state.itemOperates) {
      cols.push(
        {
          label: "操作",
          fixed: 'right',
          minWidth: 200,
          render: (item) => {
            return (<Operate opts={this.state.itemOperates} onClickOperate={this.onClickOperate.bind(this, item)}></Operate>)
          }
        })
    }

    this.setState({
      customCols: customCols
    })

    return cols
  }

  onClickOperate(OperateType, a) {
    console.log(OperateType, a)
  }

  search(mode) {
    console.log('son to father', mode)

  }

  handleSort(data) {
    console.log('自定义');
  }

  costomColsChanges(cols) {
    console.log(cols)
    this.state.colData.map(item => {
      item.isShow = -1 != cols.indexOf(item.prop)
    })

    this.setState({
      columns: this.genTableCals()
    })
  }

  render() {

    return (
      <div className={this.props.className}>
        <div className="flex space-between">
          <div>
            <Button type="primary" onClick={this.props.clickPageOperate.bind(this, 'add')} per="Add">增加</Button>
            <Button type="primary" onClick={this.props.clickPageOperate.bind(this, 'import')} per="Import">导入</Button>
          </div>
          <div>
            <span  className="mr-10">
            <Button type="primary" onClick={this.props.clickPageOperate.bind(this, 'export')} per="Export">导出</Button>
            </span>
            <Popover placement="bottom-end" className="custom-col" width="100" trigger="hover" content={
              <Checkbox.Group value={this.state.customCols} onChange={this.costomColsChanges.bind(this)} min={1}>
                {
                  this.state.colData.map((item, i) => {
                    return <Checkbox key={item.prop} label={item.prop} trueLabel={item.label} falseLabel={item.label} ></Checkbox>
                  })
                }
              </Checkbox.Group>
            }>
              <Button type="primary" per="Add">自定义列</Button>
            </Popover>

          </div>
        </div>

        <Table
          className="mt-10 ovx-hidden"
          emptyText="暂无数据"
          style={{ width: '100%' }}
          columns={this.state.columns}
          data={this.state.data}
          border={true}
          stripe={true}
          highlightCurrentRow={true}
          onSortChange={this.handleSort.bind(this)}
        />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    // topNav: state.topNav,
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

export default connect(mapStateToProps, mapDispatchToProps)(ListTable)