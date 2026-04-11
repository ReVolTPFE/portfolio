export default defineNuxtRouteMiddleware((to) => {
	useHead({
		meta: [
			{ name: 'robots', content: to.path === '/' ? 'index, follow' : 'noindex, nofollow' }
		]
	});
});
