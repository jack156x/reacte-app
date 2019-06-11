import Vue from 'vue'
import Router from 'vue-router'
const homes = resolve => {
  // Indicator.open();
  require.ensure(['@/page/home'], () => {
    resolve(require('@/page/home'))
    // Indicator.close()
  })
}
const classify = resolve => {
  require.ensure(['@/page/classify'], () => {
    resolve(require('@/page/classify'))
  })
}
const findIng = resolve => {
  require.ensure(['@/page/find'], () => {
    resolve(require('@/page/find'))
  })
}
const cart = resolve => {
  require.ensure(['@/page/cart'], () => {
    resolve(require('@/page/cart'))
  })
}
const mine = resolve => {
  require.ensure(['@/page/mine'], () => {
    resolve(require('@/page/mine'))
  })
}
Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: '/static',
  scrollBehavior(to, from, savedPosition) {
    return { x: 0, y: 0 }
  },
  routes: [
    { path: '/', redirect: '/home' },
    {
      path: '/home',
      name: 'homes',
      meta: { navShow: false, cname: '一级页面' },
      component: homes
    },
    {
      path: '/classify',
      name: 'classify',
      meta: { navShow: false, cname: '一级页面' },
      component: classify
    },
    {
      path: '/findIng',
      name: 'findIng',
      meta: { navShow: true, cname: '一级页面' },
      component: findIng
    },
    {
      path: '/cart',
      name: 'cart',
      meta: { navShow: true, cname: '一级页面' },
      component: cart
    },
    {
      path: '/mine',
      name: 'mine',
      meta: { navShow: true, cname: '一级页面' },
      component: mine
    }
    // {
    //  path: '*', 
    //  name: 'NotFoundComponent',
    //  component: NotFoundComponent
    //},
  ]
})
// router.beforeEach((to, from, next) => {
//   const token = sessionStorage.getItem('demo-token');
//   if (to.path == '/') { // 如果是跳转到登录页的
//     if (token != 'null' && token != null) {
//       next('/todolist') // 如果有token就转向todolist不返回登录页
//     }
//     next(); // 否则跳转回登录页
//   } else {
//     if (token != 'null' && token != null) {
//       next() // 如果有token就正常转向
//     } else {
//       next('/') // 否则跳转回登录页
//     }
//   }
// })
// router.beforeEach((to, from, next) => {
//   new Promise((resolve, reject) => {
//     if (getCookie(tokenName)) {
//       if (!getInfo()) {
//         Promise.all([store.dispatch('getBasicInfo'), store.dispatch('getUserDetail')]).then(res => {
//           store.dispatch('GenerateRoutes', { roles }).then(() => {
//             // 根据用户权限生成可访问的路由表
//             router.addRoutes(store.getters.addRouters) // 动态添加可访问路由表
//             router.addRoutes(NotFoundRouterMap) // 添加404及重定向路由规则
//             resolve({ ...to, replace: true }) // 重新加载一次路由，让路由表更新成功后走下面else的判断
//           })

//         })
//       } else {
//         // ...other codes
//       }
//     } else {
//       window.location.href = '/login.html'
//     }
//   }).then(res => {
//     if (res) {
//       next(res)
//     } else {
//       next()
//     }
//   }).catch(err => {
//     new Error(err)
//     next(false)
//   })
export default router

// const My = () => lazyLoadView(import('@/view/My.vue'));
// const router = new VueRouter({
//   routes: [
//     {
//       path: '/my',
//       component: My
//     }
//   ]
// })
