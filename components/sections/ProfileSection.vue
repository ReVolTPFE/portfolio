<script setup lang="ts">
import SectionTitle from '~/components/SectionTitle.vue';
import LinkButton from '~/components/LinkButton.vue';

const currentYear = new Date().getFullYear();
const currentAge = currentYear - 2002;
</script>

<template>
	<section id="profile" class="section-spacing">
		<SectionTitle title="Qui suis-je ?" subtitle="Mon profil" />

		<div class="w-full md:w-1/2 mx-auto md:text-justify">
			<p class="mb-4">Je suis Arnaud Steiner, {{ currentAge }} ans, développeur web en alternance depuis plus de 4 ans en parallèle de mes études en ingénierie logicielle.</p>
			<p class="mb-4">Passionné depuis le lycée, j'ai conçu de nombreuses applications pour des associations comme pour mes besoins quotidiens.</p>
			<p class="mb-4">Mes expériences dans trois entreprises m'ont permis d'explorer des domaines variés et de renforcer ma maîtrise du développement web.</p>
			<p class="mb-8">Aujourd'hui, je mets cette expertise au service d'applications sécurisées, ergonomiques et adaptées aux besoins réels des utilisateurs.</p>

			<div class="text-center">
				<LinkButton link="/profile" bg-color="bg-secondary" text="Voir mon profil détaillé" />
			</div>
		</div>
	</section>
</template>
