<script setup lang="ts">
const { icon } = defineProps<{
	icon: string
}>()
</script>

<template>
	<p class="relative mx-auto w-10 h-10 border-4 border-primary rounded-full flex justify-center items-center bg-white z-10 p-1">
		<Icon :name="icon" class="text-primary w-7 h-7" />
	</p>
</template>
