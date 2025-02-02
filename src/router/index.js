import { createWebHistory, createRouter } from "vue-router";

import store from '@/state/store'
import routes from './routes'

const router = createRouter({
  history: createWebHistory(),
  routes,
  // Use the HTML5 history API (i.e. normal-looking routes)
  // instead of routes with hashes (e.g. example.com/#/about).
  // This may require some server configuration in production:
  // https://router.vuejs.org/en/essentials/history-mode.html#example-server-configurations
  mode: 'history',
  // Simulate native-like scroll behavior when navigating to a new
  // route and using back/forward buttons.
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  },
})
router.beforeEach(async(routeTo, routeFrom, next) => {
  const auth = store.getters["auth/authenticated"];
	if (routeTo.matched.some((record) => record.meta.requiresAuth)) {
		if (!auth) {
			next("/login");
		} else {
			next();
		}
	} else if (routeTo.matched.some((record) => record.meta.requiresVisitor)) {
		if (auth) {
			next("/");
		} else {
			next();
		}
	} else {
		next();
	}
})

export default router
