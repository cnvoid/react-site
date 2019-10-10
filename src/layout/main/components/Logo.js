import React from 'react';
import{pageSetting} from '@/store/state.js'
import { connect } from 'react-redux'

class Logo extends React.Component{
  render(){
    console.log('propos,',this.props)
    return (
    <div className="logo inline-block">
      <img src={this.props.pageSetting.logoSrc}></img>
    </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    pageSetting: state.pageSetting,
  }
}

export default  connect(mapStateToProps)(Logo)