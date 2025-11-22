<script setup lang="ts">
import { ref, onMounted } from 'vue';

const isOpen = ref(false);

onMounted(() => {
	setTimeout(() => {
		isOpen.value = true;
	}, 200);
});

function closeModal() {
	isOpen.value = false;
}
</script>

<template>
	<div
		v-if="isOpen"
		class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
		@click="closeModal"
	>
		<div
			class="bg-white shadow-lg rounded-2xl p-8 max-w-md relative mx-4"
			@click.stop
		>
			<button
				class="absolute top-3 right-4 text-gray-600 hover:text-gray-900"
				@click="closeModal"
			>
				✖
			</button>

			<h1 class="text-2xl font-semibold text-gray-800">🚀 Nouvelle version en cours !</h1>
			<p class="text-gray-600 mt-2">En attendant, retrouvez-moi sur LinkedIn ou contactez-moi par email.</p>

			<div class="mt-4 flex justify-center items-center flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
				<a
					href="https://www.linkedin.com/in/arnaud-steiner-91a5271b5/"
					target="_blank"
					class="text-blue-600 hover:text-blue-800 transition"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="32"
						height="32"
						fill="currentColor"
						viewBox="0 0 24 24"
					>
						<path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.3c-.966 0-1.5-.708-1.5-1.592 0-.902.554-1.608 1.5-1.608s1.5.706 1.5 1.608c0 .884-.534 1.592-1.5 1.592zm13.5 11.3h-3v-5.5c0-1.328-.468-2.2-1.634-2.2-.893 0-1.426.602-1.662 1.182-.085.209-.106.5-.106.792v5.726h-3s.04-9.301 0-10.301h3v1.461c.4-.615 1.116-1.49 2.72-1.49 1.99 0 3.482 1.293 3.482 4.073v6.257z"/>
					</svg>
				</a>
				<a
					href="mailto:arnaud.steiner.pro@gmail.com"
					class="text-gray-700 hover:text-gray-900 transition"
				>
					📧 arnaud.steiner.pro@gmail.com
				</a>
			</div>
		</div>
	</div>
</template>
