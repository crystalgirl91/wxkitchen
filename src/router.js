import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const routes = [
  {
    path: '*',
    redirect: '/main'
  },
  {
    name:"main",
    path:"/main",
    component:()=> import('./view/main'),
    children:[
    {
      path:"",
      component: () => import('./view/sort'),
      meta: {
        title: '排名'
      }
    },
    {
      path:"sort",
      name: 'sort',
      component: () => import('./view/sort'),
      meta: {
        title: '排名'
      }
    },
    {
      path:"statistic",
      name: 'statistic',
      component: () => import('./view/statistic'),
      meta: {
        title: '统计'
      }
    }],
  },
  {
    name: 'manage',
    path:"/manage",
    component: () => import('./view/manage'),
    meta: {
      title: '管理'
    }
  }
];
const router = new Router({ routes });

router.beforeEach((to, from, next) => {
  const title = to.meta && to.meta.title;
  if (title) {
    document.title = title;
  }
  next();
});

export {
  router
};