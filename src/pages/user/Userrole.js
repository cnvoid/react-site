import React from 'react';
import { connect } from 'react-redux'
import {clickTopNav} from '@/store/actions/menu.act'
import Search from '@/components/Search'

class Topnav extends React.Component {
  constructor(props) {
    super(props)
  }

  search(mode){
    console.log('son to father',mode)

  }

  render() {

    let navs = this.props.topNav || []
    return (

    <Search onSubmit={this.search}></Search>

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