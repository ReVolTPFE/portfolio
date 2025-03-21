<script setup lang="ts">
import HeroSection from '~/components/sections/HeroSection.vue';
import ProfileSection from '~/components/sections/ProfileSection.vue';
</script>

<template>
	<div class="mt-16">
		<ComingSoon />

		<HeroSection />

		<ProfileSection />

		<div id="profile"/>
		<div id="skills"/>
		<div id="career"/>
		<div id="contact"/>
	</div>
</template>
