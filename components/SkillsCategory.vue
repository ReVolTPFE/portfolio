<script setup lang="ts">
interface Skill {
	name: string;
	image: string | string[];
}

const props = defineProps({
	title: {
		type: String,
		required: true
	},
	skills: {
		type: Array as PropType<Skill[]>,
		required: true
	}
});
</script>

<template>
	<div class="px-4 mb-12">
		<h3 class="text-primary font-bold text-2xl mb-8 text-center">{{ props.title }}</h3>

		<div class="grid grid-cols-2 sm:grid-cols-4 gap-4">
			<div v-for="(skill, index) in props.skills" :key="index" class="col-span-1 mx-auto mb-4 flex flex-col items-center">
				<div class="relative w-24 h-24 mb-4 p-[3px] pt-[3.5px] rounded-xl bg-gradient-to-br from-blue-600 to-purple-600">
					<div class="w-full h-full bg-gray-darker rounded-[10px] flex justify-center items-center overflow-hidden">
						<template v-if="Array.isArray(skill.image)">
							<img
								v-for="(img, i) in skill.image"
								:key="i"
								:src="img"
								:alt="skill.name"
								class="absolute w-3/5"
								:class="i === 0 ? 'top-[6px] left-[6px]' : 'bottom-[6px] right-[6px]'"
							>
						</template>
						<img
							v-else
							:src="skill.image"
							:alt="skill.name"
							class="block w-4/5"
						>
					</div>
				</div>

				<p class="text-center">{{ skill.name }}</p>
			</div>
		</div>
	</div>
</template>
