<script setup lang="ts">
import SectionTitle from '~/components/SectionTitle.vue';
import SkillsCategory from '~/components/SkillsCategory.vue';
import LinkButton from '~/components/LinkButton.vue';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const isModalOpen = ref(false);
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const selectedSkill = ref<any>(null);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function openModal(skill: any) {
	selectedSkill.value = skill;
}

function closeModal() {
	selectedSkill.value = null;
}

const frontendSkills = [
	{
		name: 'HTML/Twig',
		image: '/img/logos/HTML.webp',
		definition: 'HTML est le langage de structuration de pages web par excellence. ' +
			'Twig est un moteur de template utilisé dans plusieurs frameworks PHP, notamment Symfony. ' +
			"Les 2 servent à créer l'architecture et le contenu de notre site web.",
		evidence: [
			'Intégration de maquettes HTML depuis 7 ans dans tous mes projets.',
			'Optimisation SEO et contenu dynamique notamment avec Twig depuis 4 ans.'
		],
		evolution: "Expert avec plus de 7 ans d'expérience et une utilisation régulière."
	},
	{
		name: 'SASS/Tailwind',
		image: '/img/logos/TailwindCSS.webp',
		definition: "SASS est un préprocesseur CSS qui permet d'appliquer du style graphique/visuel à un site internet. " +
			"TailwindCSS est un framework CSS qui aide à créer rapidement la partie design d'un site internet.",
		evidence: [
			'Structuration optimisée du design de maquettes HTML depuis 7 ans dans mes projets.',
			"TailwindCSS m'a permis de coder la partie front-end de plusieurs projets plus efficacement et rapidement."
		],
		evolution: "Expert avec plus de 7 ans d'expérience et une utilisation régulière."
	},
	{
		name: 'JavaScript',
		image: '/img/logos/JavaScript.webp',
		definition: 'JavaScript est le langage web le plus connu, car il est utilisé pour toutes les interactions en direct avec le navigateur.' +
			"C'est le langage front-end utilisé par pleins de frameworks, notamment React/VueJS..." +
			"Mais c'est aussi un langage utilisé pour le back-end ou l'Ajax par exemple.",
		evidence: [
			"Utilisation de l'API Google Maps et ses fonctionnalités sur les cartes interactives.",
			'Formulaire dynamique de création de compte pour les parents et enfants sur une application de périscolaire.'
		],
		evolution: "Confirmé grâce à une utilisation régulière depuis des années. Mais mon domaine principal reste le PHP, donc il y a énormément de choses que j'apprends au moment de coder."
	},
	{
		name: 'VueJS/NuxtJS',
		image: '/img/logos/NuxtJS.webp',
		definition: 'VueJS est un framework front-end JavaScript permettant de créer facilement des sites internet par composants.' +
			"NuxtJS utilise VueJS en ajoutant une partie SSR (Server Side Rendering) et améliore le SEO en plus d'autres fonctionnalités.",
		evidence: [
			'Création de mon portfolio.',
			"Création d'une application de pointeuse pour les livreurs d'une entreprise."
		],
		evolution: "J'apprends le framework NuxtJS via plusieurs projets, dont un gros projet à venir en entreprise."
	},
];

const backendSkills = [
	{
		name: 'PHP',
		image: '/img/logos/PHP.webp',
		definition: "Le langage back-end web ancré depuis 30. Sa robustesse et sa performance font que j'aime utiliser ce langage au quotidien.",
		evidence: [
			"J'utilise PHP dans mes projets personnels et professionnels depuis 7 ans.",
			"J'ai pu créer plusieurs SaaS Symfony destinés à des entreprises clientes.",
			"Je travaille aussi sur de la migration de code PHP 'vanilla' vers Symfony sur un projet."
		],
		evolution: "Expert avec le langage depuis 7 ans, je me tiens à jour sur les nouvelles sorties de version et leurs fonctionnalités. Je l'utilise au quotidien."
	},
	{
		name: 'Symfony',
		image: '/img/logos/Symfony.webp',
		definition: "C'est un framework PHP robuste et modulaire idéal pour les application PHP évolutives et professionnelles.",
		evidence: [
			"SaaS de gestion d'une agence d'interim.",
			'SaaS de création de contrats en ligne.'
		],
		evolution: "Confirmé grâce à mes 3 ans d'expérience, je me tiens à jour sur les nouvelles version et leurs fonctionnalités. Je l'utilise au quotidien."
	},
	{
		name: 'MySQL',
		image: '/img/logos/MySQL.webp',
		definition: "C'est un SGBD (Système de Gestion de Base de Données) relationnel permettant de stocker, d'appeler et de calculer des données.",
		evidence: [
			"Utilisation sur d'anciens projets PHP 'vanilla'.",
			'Utilisation sur tous mes projets Symfony passés et en cours.'
		],
		evolution: "Expert dans l'utilisation du langage SQL depuis 7 ans, aujourd'hui je l'utilise au quotidien."
	},
	{
		name: 'TypeScript',
		image: '/img/logos/TypeScript.webp',
		definition: "C'est une surcouche typée de JavaScript très prisée aujourd'hui pour sa robustesse.",
		evidence: [
			'Utilisé dans la création de mon portfolio.',
			"Utilisé dans la création d'une application de pointeuse pour les livreurs d'une entreprise."
		],
		evolution: "J'apprends le langage via plusieurs projets, en utilisant les documentations, exemple de code..."
	},
];

// const otherSkills = [
// 	{
// 		name: 'Git',
// 		image: '/img/logos/Git.webp',
// 		definition: "C'est le système de contrôle de version et de collaboration entre développeurs le plus utilisé au monde.",
// 		evidence: [
// 			"Utilisé dans tous mes projets depuis que j'ai appris la programmation web."
// 		],
// 		evolution: "Je me considère expert dans le domaine au vu de mon expérience, aujourd'hui je l'utilise au quotidien."
// 	},
// 	{
// 		name: 'Docker',
// 		image: '/img/logos/Docker.webp',
// 		definition: "Permet de faire fonctionner un environnement/une application sur n'importe quelle machine via son système de conteneurs.",
// 		evidence: [
// 			"Utilisé dans tous mes projets depuis que j'ai appris la programmation web avancée."
// 		],
// 		evolution: "Je me considère expert dans le domaine au vu de mon expérience, aujourd'hui je l'utilise au quotidien."
// 	},
// 	{
// 		name: 'CI/CD',
// 		image: '/img/logos/CICD.webp',
// 		definition: "CI/CD (Continuous Integration / Continuous Development) automatise l'intégration et le déploiement d'une application.",
// 		evidence: [
// 			'Utilisé dans mes projets récents, notamment mon portfolio.',
// 			'Utilisé dans mes projets en entreprise.'
// 		],
// 		evolution: "Je me considère à un niveau intermédiaire dans le domaine au vu de mon expérience, aujourd'hui je l'utilise au lancement de nouveaux projets."
// 	},
// 	{
// 		name: 'Linux',
// 		image: '/img/logos/Linux.webp',
// 		definition: "Système d'exploitation open-source, incontournable pour les développeurs et l'hébergement d'applications en tout genre.",
// 		evidence: [
// 			"Utilisé dans tous mes projets depuis que j'ai appris la programmation web."
// 		],
// 		evolution: "Je me considère expert dans le domaine au vu de mon expérience, aujourd'hui je l'utilise au quotidien."
// 	},
// ];

const softSkills = [
	{
		name: 'Communication claire',
		image: 'maki:communications-tower',
		isIcon: true,
		definition: 'Capacité à transmettre des informations et des connaissances. Indispensable dans un environnement professionnel.',
		evidence: [
			'Gestion de réunions clients dans plusieurs entreprises avec plusieurs clients.',
			'Réunions de pilotage de projets.',
			'Réunions avec des prospects transformés en clients.'
		],
		evolution: "J'ai pu m'exercer sur de nombreux cas d'usage, c'est un domaine qui nous apprend toujours de nouvelles choses."
	},
	{
		name: 'Esprit d\'analyse',
		image: 'bx:bxs-analyse',
		isIcon: true,
		definition: 'Capacité à décomposer un problème complexe pour trouver la meilleur solution.',
		evidence: [
			"Compétence apprise avec l'expérience.",
			"J'effectue ces analyses détaillées dans chacun de mes projets"
		],
		evolution: "Depuis quelques années j'ai acquis de l'expérience, mais il y a toujours de nouvelles méthodes, d'optimisations à comprendre..."
	},
	{
		name: 'Rigueur et sens du détail',
		image: 'streamline:module-puzzle-3-solid',
		isIcon: true,
		definition: 'Travail précis et orienté qualité afin de fournir le meilleur résultat possible.',
		evidence: [
			"J'ai toujours eu ce sens du détail qui est très utile dans le monde professionnel."
		],
		evolution: "J'ai cette rigueur depuis toujours, je ne fais pas les choses à moitié."
	},
	{
		name: 'Apprentissage continu',
		image: 'hugeicons:elearning-exchange',
		isIcon: true,
		definition: "Fait d'apprendre en continu de nouvelles connaissances dans un domaine.",
		evidence: [
			"J'apprends des nouvelles technologies dans des projets personnels.",
			'Mais aussi de nombreuses choses en entreprise.'
		],
		evolution: "Compétence en évolution constante. Chaque projet me permet d'expérimenter et d'apprendre."
	},
];
</script>

<template>
	<section id="skills" class="section-spacing bg-gray-blue text-white">
		<SectionTitle title="Compétences" subtitle="Savoir-faire" />

		<SkillsCategory title="Frontend" :skills="frontendSkills" @show-modal="openModal" />
		<SkillsCategory title="Backend" :skills="backendSkills" @show-modal="openModal" />
		<!--		<SkillsCategory title="Autres" :skills="otherSkills" @show-modal="openModal" />-->
		<SkillsCategory
			title="Soft Skills"
			:skills="softSkills"
			:icons="true"
			@show-modal="openModal"
		/>

		<div class="flex justify-center">
			<LinkButton link="/projects" bg-color="bg-primary" text="Voir mon travail" />
		</div>

		<div v-if="selectedSkill" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50" @click.self="closeModal">
			<div class="bg-white text-black rounded-xl p-6 w-11/12 md:w-2/3 relative shadow-lg">
				<button class="absolute top-3 right-3 text-gray-600 text-3xl" @click="closeModal">&times;</button>

				<div class="flex justify-center mb-4">
					<!-- Si isIcon = true, affiche une icône, sinon une image -->
					<Icon v-if="selectedSkill.isIcon" :name="selectedSkill.image" class="text-tertiary w-16 h-16" />
					<img
						v-else
						:src="selectedSkill.image"
						alt=""
						class="w-20 h-20"
					>
				</div>

				<h2 class="text-2xl font-bold text-center mb-2">{{ selectedSkill.name }}</h2>

				<h3 class="text-xl font-bold text-primary mb-2 mt-4">Ma définition</h3>
				<p>{{ selectedSkill.definition }}</p>

				<h3 class="text-xl font-bold text-primary mb-2 mt-4">Mes expériences</h3>
				<ul class="ml-5">
					<li v-for="(ev, index) in selectedSkill.evidence" :key="index" class="list-disc">{{ ev }}</li>
				</ul>

				<h3 class="text-xl font-bold text-primary mb-2 mt-4">Mon autocritique et mon évolution</h3>
				<p>{{ selectedSkill.evolution }}</p>
			</div>
		</div>
	</section>
</template>
