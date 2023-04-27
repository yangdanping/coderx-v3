import { createRouter, createWebHistory } from 'vue-router';
import type { RouteRecordRaw } from 'vue-router';
import useRootStore from '@/stores';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    // route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('@/views/home/Home.vue')
  },
  {
    name: 'article',
    path: '/article',
    meta: { title: '文章' },
    component: () => import('@/views/article/Article.vue')
  },
  {
    name: 'detail',
    path: '/article/:articleId',
    meta: { title: '文章详情' },
    component: () => import('@/views/detail/Detail.vue')
  },
  {
    name: 'edit',
    path: '/edit',
    meta: { title: '写文章' },
    component: () => import('@/views/edit/Edit.vue')
  },
  {
    name: 'user',
    // path: '/user/:userId',
    path: '/user',
    meta: { title: '个人空间' },
    component: () => import('@/views/user/User.vue')
  },
  {
    name: 'notfound',
    path: '/:pathMatch(.*)',
    component: () => import('@/views/NotFount.vue')
  }
];
// hash的好处是不会因为服务器部署而找不到文件
const router = createRouter({
  history: createWebHistory(),
  routes
});

// const rootStore = useRootStore();

// 路由前置守卫

// 路由后置守卫
router.afterEach(() => window.scrollTo(0, 0));

export { routes };

export default router;
