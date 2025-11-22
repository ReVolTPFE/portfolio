<script setup lang="ts">
const props = defineProps<{
	title: string
	school: string
	schoolDescription: string
	date: string
	company?: string
	companyDescription?: string
	company2?: string
	companyDescription2?: string
}>();
</script>

<template>
	<div class="my-4 mx-8 sm:mx-0 sm:ml-0 sm:mr-0 relative z-10">
		<div class="bg-white p-4 rounded-lg shadow-md">
			<div class="flex flex-col sm:flex-row sm:justify-between items-center sm:items-center mb-2">
				<h3 class="font-semibold text-primary text-lg sm:text-xl sm:w-5/6">{{ props.title }}</h3>
				<span class="inline-block px-3 py-1 bg-primary/10 text-primary text-xs md:text-sm rounded-full my-2 sm:my-0">{{ props.date }}</span>
			</div>
			<div class="mx-2">
				<p class="text-sm sm:text-md text-gray-600">{{ props.schoolDescription }}</p>
				<div v-if="company2 && companyDescription2" class="mt-4">
					<p class="text-md sm:text-lg text-tertiary font-bold">{{ props.company2 }}</p>
					<p class="text-sm sm:text-md text-gray-600">{{ props.companyDescription2 }}</p>
				</div>
				<div v-if="company && companyDescription" class="mt-4">
					<p class="text-md sm:text-lg text-tertiary font-bold">{{ props.company }}</p>
					<p class="text-sm sm:text-md text-gray-600">{{ props.companyDescription }}</p>
				</div>
			</div>
		</div>
	</div>
</template>
