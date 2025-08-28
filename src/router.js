import { createMemoryHistory, createRouter } from 'vue-router'

import AboutView from './pages/Aboutview.vue'
import Exampleview from './pages/Exampleview.vue'
import HomeView from './pages/Homeview.vue'
import WebDview from './pages/WebDview.vue'
import Ex_A1 from './pages/Ex_A1.vue'
import Ex_B1 from './pages/Ex_B1.vue'

const routes = [
  { path: '/', name: 'home', component: HomeView },
  { path: '/about',name: 'about',  component: AboutView },
  { path: '/exam',name: 'exam',  component: Exampleview },
  { path: '/web',name: 'web',  component: WebDview,
    children: [
        {path: 'a1', name : 'a1', component: Ex_A1,},
        {path: 'b2', name : 'b1', component: Ex_B1,},
    ]
   },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

export default router