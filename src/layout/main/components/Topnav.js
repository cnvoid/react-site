import React from 'react';
import { connect } from 'react-redux'
import {clickTopNav} from '@/store/actions/menu.act'

class Topnav extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {

    let navs = this.props.topNav || []
    return (
      <ul className="top-nav inline-block c-fff">
        {
          navs.map((item, index) => {
            return <li onClick={this.props.selectTopNav.bind(this,item)} key={index} className={item.isSelected ? 'c-yellow' : ''}>{item.name}</li>
          })
        }
      </ul>
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
    selectTopNav (data) {
        dispatch(clickTopNav(data))
        dispatch({type: 'SET_SIDE_NAV',data: data.sub})
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Topnav)