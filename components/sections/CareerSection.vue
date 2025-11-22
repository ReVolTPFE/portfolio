<script setup lang="ts">
import SectionTitle from '~/components/SectionTitle.vue';
import CareerStep from '~/components/CareerStep.vue';
</script>

<template>
	<section id="career" class="section-spacing">
		<SectionTitle title="Parcours" subtitle="Carrière"/>

		<div class="career-bg relative w-full sm:w-3/4 mx-auto">
			<CareerIcon icon="material-symbols:rocket-launch" />
			<CareerStep
				title="Mastère Expert en Ingénierie Logicielle - Ecole à distance"
				school-description="Bac+5, spécialisé en ingénierie logicielle avancée. Architecture logicielle, DevOps, gestion de projets développement fullstack, CI/CD."
				school="Iscod"
				date="09/2023 à 12/2025"
				company="Alternance chez DGS Création - Mulhouse"
				company-description="1e année de Mastère : Gestion et développement complet de 2 SaaS Symfony. Travail avec APIs complexes. Création sites WordPress et Prestashop. Gestion de projet et réunions clients."
				company2="Alternance chez HopLunch - Oberhausbergen"
				company-description2="2e année de Mastère : Développement web sur la plateforme logistique et e-commerce B2B2C, avec backoffice métier étendu (livreurs, restaurateurs, ops internes...). Travail avec APIs complexes. Gestion et développement d'un projet interne complet. Refontes multiples de fonctionnalités et automatisation de processus."
			/>
			<CareerIcon icon="material-symbols:work" />
			<CareerStep
				title="Licence Développement Web et Conception d'Interfaces (DWEB) - IUT de Haguenau"
				school-description="Bac+3, spécialisé en développement web avancé, gestion de projets web, communication, maquettes et UI/UX."
				school="IUT de Haguenau"
				date="09/2022 à 08/2023"
				company="Alternance chez Agence Tiz - Strasbourg"
				company-description="Migration serveur d'environ 400 sites et outils, maintenance de sites web WordPress, projets de R&D interne PHP, développement frontend Drupal."
			/>
			<CareerIcon icon="mdi:compass" />
			<CareerStep
				title="DUT Métiers du Multimédia et de l'Internet (MMI) - IUT de Haguenau"
				school-description="Bac+2, spécialisé sur le développement web, le design web et print, la communication, la gestion de projet et l'audiovisuel."
				school="IUT de Haguenau"
				date="09/2020 à 08/2022"
				company="Alternance chez Agence Tiz - Strasbourg"
				company-description="Maintenance de sites web WordPress, projets de R&D interne PHP, développement frontend Drupal."
			/>
			<CareerIcon icon="material-symbols:school" />
			<CareerStep
				title="Baccalauréat Scientifique Sciences de l'Ingénieur (SSI) - Mention Très Bien - Lycée Stanislas Wissembourg"
				school-description="Bac S option Sciences de l'Ingénieur (SI), option Informatique, mention Très Bien."
				school="Lycée Stanislas Wissembourg"
				date="09/2017 à 08/2020"
			/>
		</div>
	</section>
</template>

<style scoped>
	.career-bg::before {
		content: "";
		position: absolute;
		top: 0;
		left: 50%;
		transform: translateX(-50%);
		width: 5px;
		height: 100%;
		z-index: 1;
		@apply bg-primary;
	}
</style>
