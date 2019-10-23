import apis from '@/apis/index'
let {login} = apis
export function submitLogin (data) {
  let res = login()
  return (dispatch) =>{

  }
}

export function getTelCode (){
  return ()=>{

  }
}

export function setSideNav (data) {
  return (dispatch) => {
    dispatch({ type: 'SET_SIDE_NAV', data: data })
  }
}

export function clickSideNav (data) {

  return (dispatch) => {
    dispatch({ type: 'CLICK_SIDE_NAV', data: data })
  }
}

export function clickCrumbs (data) {
  return (dispatch) => {
    dispatch({ type: 'CLICK_CRUMBS', data: data })
  }
}

