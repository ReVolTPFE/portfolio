<script setup lang="ts">
import Header from '~/components/layouts/Header.vue';
import Footer from '~/components/layouts/Footer.vue';
</script>

<template>
	<div class="w-full flex flex-col min-h-screen bg-gray-lighter">
		<Header />

		<main class="mt-16 z-0 flex flex-col flex-1">
			<slot/>
		</main>

		<Footer />
	</div>
</template>
