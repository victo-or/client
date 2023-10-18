import { createRouter, createWebHistory } from 'vue-router'
import ProductsView from '../views/ProductsView.vue'
import HomeView from '../views/HomeView.vue'
import NewProductView from '@/views/NewProductView.vue'
import ProductView from '@/views/ProductView.vue'
import EditProductView from '@/views/EditProductView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/products',
    name: 'products',
    component: ProductsView
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../views/ProductsView.vue')
  },
  {
    path: '/new-product',
    name: 'new-product',
    component: NewProductView
  },
  {
    path: '/product/:id',
    name: 'product',
    component: ProductView
  },
  {
    path: '/edit-product/:id',
    name: 'edit-product',
    component: EditProductView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
