import Userrole from '@/pages/user/Userrole'
import Userroleedit from '@/pages/user/Userroleedit'
import User from '@/pages/user/User'
import Structure from '@/pages/user/Structure'
import Myinfo from '@/pages/user/Myinfo'
import ModifyTel from './pages/user/Modifypass'
export default [
  {
    name: '角色权限管理',
    path: '/setting/user/role',
    component: Userrole
  },
  {
    name: '添加角色',
    path: '/setting/user/role-add',
    component: Userroleedit
  },
  {
    name: '组织结构管理',
    path: '/setting/user/structure',
    component: Structure
  },
  {
    name: '用户管理',
    path: '/setting/user/userManage',
    component: User
  },

  {
    name: '个人信息',
    path: '/setting/user/myInfo',
    component: Myinfo
  },
  {
    name: '修改手机号码',
    path: '/setting/user/modify-tel',
    component: ModifyTel
  }
]

export let goTo = function (path) {
  window.location.hash = path
}