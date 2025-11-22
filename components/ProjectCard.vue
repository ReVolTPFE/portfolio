<script setup lang="ts">

const { project } = defineProps<{ project: object }>();
</script>

<template>
	<NuxtLink class="text-primary text-sm" :to="`/projects/${project.slug}`">
		<div class="border rounded-xl bg-white h-full">
			<div>
				<img :src="project.image" :alt="project.title" class="w-full h-48 object-contain rounded-tl-xl rounded-tr-xl">
			</div>

			<div class="p-4 flex flex-col justify-between">
				<div class="flex items-start justify-between">
					<p class="font-bold text-primary flex-1 text-lg">{{ project.title }}</p>
					<p
						class="text-xs px-2 py-1 rounded-full whitespace-nowrap"
						:class="{
							'bg-blue-100 text-blue-700': project.category === 'web',
							'bg-green-100 text-green-700': project.category === 'app',
							'bg-purple-100 text-purple-700': project.category !== 'web' && project.category !== 'app'
						}"
					>
						{{ project.category }}
					</p>
				</div>


				<p class="text-gray-text py-4 text-md">{{ project.description }}</p>

			</div>
		</div>
	</NuxtLink>
</template>
