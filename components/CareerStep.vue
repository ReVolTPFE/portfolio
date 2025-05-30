<script setup lang="ts">
const props = defineProps<{
	title: string
	school: string
	description: string
	date: string
	description2?: string
}>()
</script>

<template>
	<div class="my-4 mx-8 sm:mx-0 sm:ml-0 sm:mr-0 relative z-10">
		<div class="bg-white p-4 rounded-lg shadow-md">
			<div class="flex flex-col sm:flex-row sm:justify-between items-start sm:items-center mb-2"><h3
				class="font-poppins font-semibold text-primary">{{ props.title }}</h3><span
				class="inline-block px-3 py-1 bg-primary/10 text-primary text-xs rounded-full mt-1 sm:mt-0">{{ props.date }}</span>
			</div>
			<p class="text-sm text-gray-600">{{ props.description }}</p>
			<p class="text-sm text-gray-600">{{ props.description2 }}</p>
		</div>
	</div>
</template>
