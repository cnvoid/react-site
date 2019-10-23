import React from 'react';
import style from './main.module.styl';
import Logo from './components/Logo'
import Topnav from './components/Topnav'
import Sidenav from './components/Sidenav'
import Crumbs from './components/Crumbs'
import WaterMark from '@/components/Watermark'
import User from './components/User'
import { Router, Switch, Route } from 'react-router';
import { Provider } from 'react-redux'
import store from './../../store/index'
import routeConfig from '@/route.js'

let createHashHistory = require("history").createHashHistory
const history = createHashHistory();

class Main extends React.Component {
  constructor(props){
    super(props)
  }

  componentDidMount() {
    console.log(style)
  }

  render() {
    console.log('this.store', store)
    return (
      // <Provider store={store}>
        <div className={style.Layout}>
          <WaterMark></WaterMark>
          <div className="head bg-b">
            <div className="w-1300 center flex space-between">

              <div className=" inline-block">
                <Logo />
                <Topnav />
              </div>
              <div>
                <User />
              </div>
            </div>
          </div>

          <div className="w-1300 center mt-20 flex space-between">
            <div className="sub-nav bg-gray inline-block">
              <Sidenav />
            </div>

            <div className="main bg-fff inline-block">
              <div className="crumbs ov-hidden">
                <Crumbs />
              </div>
              <div className="content bg-fff">
                <div >
                  <Router history={history}>
                    <Switch>
                      {
                        routeConfig.map((item, i)=>{
                          return <Route key={i} path={item.path} component={item.component} />
                        })
                      }
                    </Switch>
                  </Router>
                </div>
              </div>
            </div>
          </div>

        </div>
      // </Provider>
    );
  }

}

export default Main;
