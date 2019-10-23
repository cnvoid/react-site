import  "react-app-polyfill/ie11";
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux'
import store from '@/store/index'
// import 'element-theme-default';
import 'element-theme-default/lib/select.css'
import 'element-theme-default/lib/date-picker.css'
import 'element-theme-default/lib/popover.css'

import 'react-viewer/dist/index.css';

import './assets/theme/index.css'
import './assets/theme/ele-hack.css'

import './assets/css/common.styl'

import {HashRouter } from 'react-router-dom';

ReactDOM.render(
 <Provider store={store}>
<HashRouter>
<App />
</HashRouter>

</Provider>

, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
