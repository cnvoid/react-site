import React from 'react';
import { connect } from 'react-redux'
import { clickTopNav } from '@/store/actions/menu.act'
import {Dropdown} from 'element-react'
class Topnav extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {

    let navs = this.props.topNav || []
    console.log('navs,', navs)
    return (
      <Dropdown className="dropdown" menu={(
        <Dropdown.Menu>
          <Dropdown.Item>个人信息</Dropdown.Item>
          <Dropdown.Item>修改手机</Dropdown.Item>
          <Dropdown.Item>退出登录</Dropdown.Item>
        </Dropdown.Menu>
      )}>
        <span className="el-dropdown-link c-fff">
          <i className="el-icon-caret-bottom el-icon-user-solid"></i>
          张三三
          <i className="el-icon-caret-bottom el-icon--right"></i>
        </span>
      </Dropdown>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    userInfo: state.userInfo,
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    // selectTopNav (data) {
    //     dispatch(clickTopNav(data.name))
    //     console.log('toptop', data)
    //     dispatch({type: 'SET_SIDE_NAV',data: data.sub})
    // }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Topnav)