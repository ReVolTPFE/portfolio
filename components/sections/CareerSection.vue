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
				title="Mastère Expert en Ingénierie Logicielle"
				description="Bac+5, spécialisé en ingénierie logicielle avancée. Architecture logicielle, DevOps, gestion de projets développement fullstack, CI/CD"
				school="Iscod"
				date="09/2023 à 12/2025"
			/>
			<CareerIcon icon="material-symbols:work" />
			<CareerStep
				title="Licence Développement Web et Conception d'Interfaces (DWEB)"
				description="Bac+3, spécialisé en développement web avancé, gestion de projets web, communication, maquettes et UI/UX."
				school="IUT de Haguenau"
				date="09/2022 à 08/2023"
			/>
			<CareerIcon icon="mdi:compass" />
			<CareerStep
				title="DUT Métiers du Multimédia et de l'Internet (MMI)"
				description="Bac+2, spécialisé sur le développement web, le design web et print, la communication, la gestion de projet et l'audiovisuel."
				school="IUT de Haguenau"
				date="09/2020 à 08/2022"
				description2="Tiz"
			/>
			<CareerIcon icon="material-symbols:school" />
			<CareerStep
				title="Baccalauréat Scientifique Sciences de l'Ingénieur (SSI) - Mention Très Bien"
				description="Bac S option Sciences de l'Ingénieur (SI), option Informatique, mention Très Bien."
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
