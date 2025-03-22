<script setup lang="ts">
interface Skill {
	name: string;
	image: string;
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
	inverted: {
		type: Boolean,
		default: false
	}
});
</script>

<template>
	<div class="px-4" :class="inverted ? 'my-12' : ''">
		<h3
			class="text-primary font-bold text-2xl mb-8"
			:class="inverted ? 'text-right' : ''"
		>{{ props.title }}</h3>

		<div class="grid grid-cols-4 gap-4">
			<div v-for="(skill, index) in props.skills" :key="index" class="col-span-1 mx-auto mb-4">
				<div class="mx-auto bg-gray-text rounded-xl w-24 h-24 mb-4 relative gradient-border">
					<!--				<img src="{{ skill.image }}" alt="">-->
				</div>
				<p class="text-center">{{ skill.name }}</p>
			</div>
		</div>
	</div>
</template>
