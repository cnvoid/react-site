
export function setPageTitle (data) {
  return (dispatch, getState) => {
    dispatch({ type: 'SET_PAGE_TITLE', data: data })
  }
}

export function setPageLogo (data) {
  return (dispatch, getState) => {
    dispatch({ type: 'SET_PAGE_LOGO', data: data })
  }
}