// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	app: {
		head: {
			htmlAttrs: {
				lang: 'fr'
			},
			title: 'Arnaud Steiner - Portfolio',
			meta: [
				{ name: 'description', content: 'Découvrez mon portfolio de développeur web. Passionné par la création de sites et d\'applications modernes, j\'optimise les performances et l\'expérience utilisateur pour chaque projet.' }
			]
		}
	},
	compatibilityDate: '2024-11-01',
	devtools: { enabled: true },
	css: ['~/assets/css/main.css'],
	modules: ['@nuxt/eslint', '@nuxtjs/tailwindcss', '@nuxt/icon'],
	vite: {
		server: {
			host: true,
			port: 3000,
			watch: {
				usePolling: true,
			},
		},
	}
});
