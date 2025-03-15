<script setup lang="ts">

import HeroSection from '~/components/HeroSection.vue';
</script>

<template>
	<div class="mt-16">
		<ComingSoon />

		<HeroSection />

		<div id="profile"/>
		<div id="skills"/>
		<div id="career"/>
		<div id="contact"/>
		<NuxtLink
			to="/"
			class="font-logo block text-center text-8xl mt-8 mx-24
		 text-primary p-16 border-2 border-black"
		>AS</NuxtLink>

	</div>
</template>
