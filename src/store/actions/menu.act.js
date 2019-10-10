export function clickTopNav (data) {
  return (dispatch) => {
    dispatch({ type: 'CLICK_TOP_NAV', data: data })
    dispatch({type:'SET_TOP_CRUMBS', data: data})
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
