import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '@/views/layout/Layout.vue'
import Login from '@/views/login/Login.vue'
import Home from '@/views/home/Home.vue'

//引入产品管理组件
const Product = () => import('@/views/product/Product.vue')
const Prodlist = () => import('@/views/product/productlist/Prodlist.vue')
const Prodcategory = () => import('@/views/product/productcategory/Prodcategory.vue')

//引入订单管理组件
const Orders = () => import('@/views/orders/Orders.vue')
const Orderlist = () => import('@/views/orders/list/Orderlist.vue')
const Review = () => import('@/views/orders/review/Review.vue')
const Summary = () => import('@/views/orders/summary/Summary.vue')

//引入广告管理组件
const Ad = () => import('@/views/ad/Ad.vue')
const Adlist = () => import('@/views/ad/list/Adlist.vue')
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Layout,
    children: [
      {
        path: '/',
        name: 'home',
        component: Home
      },
      //产品管理路由
      {
        path: '/product',
        name: 'product',
        component: Product,
        children: [
          {
            path: 'prod-list',// 访问路径/product/list
            name: 'prod-list',
            component: Prodlist
          },
          {
            path: 'category',// 访问路径/product/list
            name: 'category',
            component: Prodcategory
          },
        ]
      },
      //订单管理路由
      {
        path: '/orders',
        name: 'orders',
        component: Orders,
        children: [
          {
            path: 'orders-list',
            name: 'orders-list',
            component: Orderlist
          },
          {
            path: 'review',
            name: 'review',
            component: Review
          },
          {
            path: 'summary',
            name: 'summary',
            component: Summary
          }
        ]
      },
      //广告管理路由
      {
        path: '/ad',
        name: 'ad',
        component: Ad,
        children: [
          {
            path: 'ad-list',
            name: 'ad-list',
            component: Adlist
          }
        ]
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
