
import { combineReducers } from 'redux'
import {userInfo, pageSetting, navMenu, sideNav, crumbs} from './state.js'
function pageTitle1 (state = userInfo.pageTitle, action) {
  // 不同的action有不同的处理逻辑
  switch (action.type) {
    case 'SET_PAGE_TITLE':
      return action.data
    default:
      return state
  }
}

function infoList (state = userInfo.infoList, action) {
  switch (action.type) {
    case 'SET_INFO_LIST':
      return action.data
    default:
      return state
  }
}


export default combineReducers({
    pageTitle1,
    infoList,
    pageSetting:() =>{
      return pageSetting
    },
    topNav: (state = navMenu, action) =>{
      switch (action.type) {
        case 'CLICK_TOP_NAV':
          state.map((item)=>{
            item.isSelected = item.name == action.data.name
            // console.log(item)
          })
          return state.slice()
        default:
          return state
      }
    },
    sideNav: (state = sideNav, action)=>{
      switch (action.type) {
        case 'SET_SIDE_NAV':

          return action.data
        default:
          return state
      }
    },
    crumbs: (state = crumbs, action)=>{
      switch (action.type) {
        case 'CLICK_CRUMBS':
          return action.data
        case 'SET_TOP_CRUMBS':
          console.log('ac',action.data)
          let item = action.data
          state = []
          state.push({
            name: item.name,
            to: item.to
          })
          return state.slice()
        case 'SET_SEC_CRUMBS':
          console.log(action.data)
          state = state.splice(0,1)
          state = state.concat(action.data)
          console.log(state)
        return state.slice()
        default:
          return state
      }
    }
})
