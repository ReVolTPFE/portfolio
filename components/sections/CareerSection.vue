<script setup lang="ts">
import SectionTitle from '~/components/SectionTitle.vue';
import CareerStep from '~/components/CareerStep.vue';
import { allCareerExperiences } from '~/data/career/career';

const hoplunch = allCareerExperiences.find(e => e.slug === 'hoplunch');
const dgsCreation = allCareerExperiences.find(e => e.slug === 'dgs-creation');
const iscod = allCareerExperiences.find(e => e.slug === 'iscod');
const agenceTiz = allCareerExperiences.find(e => e.slug === 'agence-tiz');
const iutHaguenau2 = allCareerExperiences.find(e => e.slug === 'iut-haguenau2');
const iutHaguenau1 = allCareerExperiences.find(e => e.slug === 'iut-haguenau1');
</script>

<template>
	<section id="career" class="section-spacing">
		<SectionTitle title="Parcours" subtitle="Carrière"/>

		<div class="career-bg relative w-full sm:w-3/4 mx-auto">
			<CareerIcon icon="material-symbols:rocket-launch" />
			<CareerStep
				v-if="hoplunch"
				:slug="hoplunch.slug"
				:company="hoplunch.company"
			/>

			<CareerIcon icon="material-symbols:school" />
			<CareerStep
				v-if="iscod"
				:slug="iscod.slug"
				:school="iscod.school"
			/>

			<CareerIcon icon="material-symbols:work" />
			<CareerStep
				v-if="dgsCreation"
				:slug="dgsCreation.slug"
				:company="dgsCreation.company"
			/>

			<CareerIcon icon="material-symbols:school" />
			<CareerStep
				v-if="iutHaguenau2"
				:slug="iutHaguenau2.slug"
				:school="iutHaguenau2.school"
			/>

			<CareerIcon icon="material-symbols:work" />
			<CareerStep
				v-if="agenceTiz"
				:slug="agenceTiz.slug"
				:company="agenceTiz.company"
			/>

			<CareerIcon icon="mdi:compass" />
			<CareerStep
				v-if="iutHaguenau1"
				:slug="iutHaguenau1.slug"
				:school="iutHaguenau1.school"
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
