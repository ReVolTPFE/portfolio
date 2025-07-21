<script setup lang="ts">
const currentYear = new Date().getFullYear();
</script>

<template>
	<footer class="bg-gray-blue text-white text-center py-6">
		<p>Arnaud Steiner - Tous droits réservés - 2021-{{ currentYear }}</p>
	</footer>
</template>
