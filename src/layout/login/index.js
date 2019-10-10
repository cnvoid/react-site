import React from 'react';
import style from './login.styl';

// import {connect} from 'react-redux'

class Login extends React.Component {

  componentDidMount(){
    console.log(style)
  }

  render(){
    return (
      <div className="login-page">
        <div className="abs abs-center loginbox RedH">
          登录
        </div>
      </div>

    );
  }

}

export default Login;
