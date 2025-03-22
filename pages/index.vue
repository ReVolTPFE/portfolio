<script setup lang="ts">
import HeroSection from '~/components/sections/HeroSection.vue';
import ProfileSection from '~/components/sections/ProfileSection.vue';
import SkillsSection from '~/components/sections/SkillsSection.vue';
</script>

<template>
	<div class="mt-16">
		<ComingSoon />

		<HeroSection />

		<ProfileSection />

		<SkillsSection />

		<div id="career" class="h-64" />
		<div id="contact"/>
	</div>
</template>
