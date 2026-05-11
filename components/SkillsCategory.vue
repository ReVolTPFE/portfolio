<script setup lang="ts">
interface Skill {
	name: string;
	image: string | string[];
	level: number;
}

const props = defineProps({
	title: {
		type: String,
		required: true
	},
	skills: {
		type: Array as PropType<Skill[]>,
		required: true
	},
	icons: {
		type: Boolean,
		required: false
	}
});
</script>

<template>
	<div class="px-4 mb-4">
		<h3 class="text-tertiary font-bold text-2xl mb-8 text-center">{{ props.title }}</h3>

		<div class="flex flex-wrap justify-center gap-2 sm:gap-4">
			<div v-for="(skill, index) in props.skills" :key="index" class="w-[calc(50%-0.5rem)] sm:w-36 mb-4 sm:mb-8 flex flex-col items-center">
				<div class="relative w-24 h-24 mb-4 p-[3px] pt-[3.5px] rounded-xl bg-gradient-to-br from-blue-600 to-purple-600 cursor-pointer hover:from-purple-600 hover:to-pink-600 hover:scale-110 transition">
					<NuxtLink class="w-full h-full bg-white rounded-[10px] flex justify-center items-center overflow-hidden" :to="`/skills/${skill.slug}`">
						<Icon v-if="props.icons" :name="skill.image" class="text-tertiary w-16 h-16" />
						<img
							v-else
							:src="skill.image"
							:alt="skill.name"
							class="block w-4/5"
						>
					</NuxtLink>
				</div>

				<p class="text-center">{{ skill.name }}</p>
					<div class="flex gap-0.5 mt-1">
						<Icon
							v-for="star in 5"
							:key="star"
							name="mdi:star"
							class="w-4 h-4"
							:class="star <= skill.level ? 'text-yellow-400' : 'text-gray-light'"
						/>
					</div>
			</div>
		</div>
	</div>
</template>
