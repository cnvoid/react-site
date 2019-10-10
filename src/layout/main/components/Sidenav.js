import React from 'react';
import { connect } from 'react-redux'
import { clickSideNav } from '@/store/actions/menu.act'
import { Layout, Menu } from 'element-react';
import {Link} from 'react-router-dom'

class Sidenav extends React.Component {
  // constructor(props) {
  //   super(props)
  // }

  render() {

    let navs = this.props.sideNav || []
    console.log('nav66s,', navs)
    return (
      <Layout.Row className="tac side-nav">
        <Layout.Col >
          <Menu defaultActive="1-1" className="el-menu-vertical-demo"  >
            {
              navs.map((items, index) => {
                let subs = items.sub || []
                let s = subs.map((item, i) => {
                  return (
                    <Link onClick={this.props.selectSideNav.bind(this, items, item)} key={i} to={item.to || '/'}>
                      <Menu.Item  key={i} index={index + '-' + i}>{item.name}</Menu.Item>
                    </Link>
                  )
                })
                return (<Menu.SubMenu key={index} index={index + 1} title={<span><i className="el-icon-message"></i>{items.name}</span>}>
                  {s}
                </Menu.SubMenu>)
              })
            }

          </Menu>
        </Layout.Col>
      </Layout.Row>
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
    selectSideNav(items, item) {
      dispatch({type: 'SET_SEC_CRUMBS', data: [{
        name: items.name,
        to: items.to
      },
      {
        name: item.name,
        to: item.to
      }
    ]})
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Sidenav)