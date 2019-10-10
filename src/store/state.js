
export let pageSetting = {
  pageTitle: '如祺出行',
  logoSrc: 'https://www.ruqimobility.com/img/logo_white.f982a897.png'
}


export let navMenu = [
  {
    name: '工作台',
    isSelected: true,
    to: '/gzt',
    sub: [{
      name: '工作1',
      sub: [{
        name: '代办',
      },
      {
        name: '已办'
      }
      ]
    },
    {
      name: '工作2',
      sub: [{
        name: '代办2',
      },
      {
        name: '已办2'
      }
      ]
    }
  ]
  },
  {
    name: '车务管理',
    permitionName: 'vehicleManage',
    sub: [{
      name: '车辆档案',
      sub: [{
        name: '车辆管理'
      }]
    }]
  },
  {
    name: '司机管理',
    permitionName: 'driver',
    sub: [{
      name: '工作1',
      name2: '工作1'
    }]
  },
  {
    name: '系统设置',
    permitionName: 'setting',
    sub: [{
      name: '基础设置',
      sub: [
        {
          name: '用户管理',
          to: 'userManage'
        },
        {
          name: '组织架构管理',
          to: '/setting/user/structure'
        },
        {
          name: '角色权限管理',
          to: '/setting/user/role'
        }
      ]
    }]
  }
]

export let sideNav = navMenu[0].sub

export let crumbs = []




export let userInfo = {
  pageTitle: '首页',
  infoList: [1, 2, 3]




}

