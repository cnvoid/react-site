import React from 'react';
import { connect } from 'react-redux'
import { clickCrumbs } from '@/store/actions/menu.act'
import { Breadcrumb } from 'element-react';
import {Link} from 'react-router-dom'

class Topnav extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {

    let crumbs = this.props.crumbs || []
    console.log('crumbs,', crumbs)
    return (
      <Breadcrumb separator="\">
        
        {/* <Breadcrumb.Item>
        <Link to="/">首页</Link>
        </Breadcrumb.Item>
         */}
        {
          crumbs.map((item, index) => {
            return (<Breadcrumb.Item key={index}>

              <Link onClick={this.props.clickCrumbs.bind(this, index, item)} to={item.to}>{item.name}</Link>
              
              </Breadcrumb.Item>)
          })
        }
      </Breadcrumb>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    crumbs: state.crumbs,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    clickCrumbs(index, item) {
      if(item.to){
        dispatch(clickCrumbs(index))
      }
      
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Topnav)