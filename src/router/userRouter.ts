import HomeView from '../views/HomeView.vue'
import scheduleView from '@/views/user/scheduleView.vue'
import modalView from '@/views/user/modalView.vue'
import goodsView from '@/views/user/goodsView.vue'
import newsView from '@/views/user/newsView.vue'
import loginView from '@/views/user/userLogin.vue'
// import PixiView from '@/views/pixiView.vue'

const userRouters = [
    {
        path: '/',
        name: 'home',
        component: HomeView
      },
      {
        path: '/user/goods',
        name: 'userGoods',
        component: goodsView
      },
      {
        path: '/user/schedule',
        name: 'userSchedule',
        component: scheduleView
      },
      {
        path: '/user/event',
        name: 'userEvent',
        component: modalView
      },
      {
        path: '/user/login',
        name: 'userLogin',
        component: loginView
      },
      {
        path: '/user/news',
        name: 'userNews',
        component: newsView
      },
      
]

export default userRouters;