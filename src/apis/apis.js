export default {
  //==========个人相关============
  login: {
    url: '/login/v1/smsCode?a=1',
    method: 'post'
  },
  createUserRole: {
    url: '/saas/role/create'
  },
  editUserRole: {
    url: '/saas/role/edit'
  },
  getUserRoleList: {
    url: '/saas/role/list'
  },
  switchRoleStatus: {
    url: '/saas/role/status'
  },
  editRolePermit: {
    url: '/saas/rolePermission/create'
  },
  editUserPermit: {
    url: '/saas/userRole/create'
  },
  getRoleOermitById: {
    url: '/saas/rolePermission/findByRoleId'
  },


  // ==========华丽的分割线=====================
  //修改手机号
  modifyTel: {
    url: '/saas/person/changePhone'
  },
  editMyInfo: {
    url: '/saas/person/editMyInfo'
  },
  viewMyInfo: {
    url: '/saas/person/findMyInfo'
  },

  //========菜单以及权限=====
  getMenuTree: {
    url: '/saas/menu/getMyMenu'
  },

  createOrg: {
    url: '/saas/org/create'
  },

  editOrg: {
    url: '/saas/org/edit'
  },
  getOrgList: {
    url: '/saas/org/getOrgList'
  }

}