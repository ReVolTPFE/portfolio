<script setup lang="ts">
import GitHub from '~/components/icons/GitHub.vue';
import LinkedIn from '~/components/icons/LinkedIn.vue';
</script>

<template>
	<section id="hero-section" class="flex items-center justify-center sm:justify-start">
		<div class="inline-block sm:mx-24 lg:mx-48 bg-secondary text-white rounded-xl p-8">
			<h1 class="text-3xl md:text-5xl font-bold"><span class="font-logo">A</span>rnaud <span class="font-logo">S</span>teiner</h1>
			<h2 class="my-4 text-2xl md:text-4xl font-semibold">Développeur web</h2>

			<div class="flex">
				<GitHub />
				<LinkedIn />
			</div>
		</div>
	</section>
</template>
