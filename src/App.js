import React from 'react';
import './assets/css/App.css';
import Login from './layout/login'
import Admin from './layout/main'

class App extends React.Component {
  layout = ''
  isLogined = false

  componentWillMount(){
    this.layout = this.isLogined ? <Admin/> : <Login/>
  }

  render(){
    return (
      this.layout
    );
  }

}

export default App;
