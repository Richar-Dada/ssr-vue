import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const _5eb9692a = () => import('..\\pages\\index.vue' /* webpackChunkName: "pages\\index" */).then(m => m.default || m)
const _53bec7c1 = () => import('..\\pages\\users\\index.vue' /* webpackChunkName: "pages\\users\\index" */).then(m => m.default || m)
const _af8183f4 = () => import('..\\pages\\todos.vue' /* webpackChunkName: "pages\\todos" */).then(m => m.default || m)
const _77cb9ad1 = () => import('..\\pages\\users\\b.vue' /* webpackChunkName: "pages\\users\\b" */).then(m => m.default || m)
const _7f372f83 = () => import('..\\pages\\users\\_a.vue' /* webpackChunkName: "pages\\users\\_a" */).then(m => m.default || m)



const scrollBehavior = (to, from, savedPosition) => {
  // SavedPosition is only available for popstate navigations.
  if (savedPosition) {
    return savedPosition
  } else {
    let position = {}
    // If no children detected
    if (to.matched.length < 2) {
      // Scroll to the top of the page
      position = { x: 0, y: 0 }
    }
    else if (to.matched.some((r) => r.components.default.options.scrollToTop)) {
      // If one of the children has scrollToTop option set to true
      position = { x: 0, y: 0 }
    }
    // If link has anchor, scroll to anchor by returning the selector
    if (to.hash) {
      position = { selector: to.hash }
    }
    return position
  }
}


export function createRouter () {
  return new Router({
    mode: 'history',
    base: '/',
    linkActiveClass: 'nuxt-link-active',
    linkExactActiveClass: 'nuxt-link-exact-active',
    scrollBehavior,
    routes: [
		{
			path: "/",
			component: _5eb9692a,
			name: "index"
		},
		{
			path: "/users",
			component: _53bec7c1,
			name: "users"
		},
		{
			path: "/todos",
			component: _af8183f4,
			name: "todos"
		},
		{
			path: "/users/b",
			component: _77cb9ad1,
			name: "users-b"
		},
		{
			path: "/users/:a",
			component: _7f372f83,
			name: "users-a"
		}
    ],
    fallback: false
  })
}
