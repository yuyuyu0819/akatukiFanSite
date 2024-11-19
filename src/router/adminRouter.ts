import HomeView from '../views/HomeView.vue'
import adminLogin from '../views/admin/adminLogin.vue'


const adminRouters = [
  {
    //これは例
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/admin/login',
    name: 'adminLogin',
    component: adminLogin
  }
]

export default adminRouters
