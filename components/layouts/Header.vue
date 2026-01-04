<script setup lang="ts">
const openMobileNav = ref(false);

function toggleMobileNav() {
	openMobileNav.value = !openMobileNav.value;
}
</script>

<template>
	<header class="fixed top-0 h-16 shadow-md z-40 w-full bg-white">
		<div class="flex justify-between items-center container h-full mx-auto px-6 lg:px-8">
			<NuxtLink to="/" class="font-logo text-4xl text-primary pt-2">AS</NuxtLink>

			<nav class="hidden md:flex space-x-6 text-gray-text font-medium">
				<NuxtLink to="/" class="hover-primary">Accueil</NuxtLink>
				<NuxtLink to="/profile" class="hover-primary">Profil</NuxtLink>
				<NuxtLink to="/#skills" class="hover-primary">Compétences</NuxtLink>
				<NuxtLink to="/projects" class="hover-primary">Projets</NuxtLink>
				<NuxtLink to="/#career" class="hover-primary">Parcours</NuxtLink>
				<NuxtLink to="/#contact" class="hover-primary">Contact</NuxtLink>
			</nav>

			<div class="hidden md:block hover-primary"><!-- Language system to integrate --></div>

			<svg
				xmlns="http://www.w3.org/2000/svg"
				class="h-8 w-8 md:hidden text-gray-text hover-primary"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
				@click="toggleMobileNav"
			><path
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="2"
				d="M4 6h16M4 12h16M4 18h16"
			/></svg>
		</div>

		<nav
			class="md:hidden bg-white border-t flex flex-col space-y-2 p-2 text-gray-text font-medium"
			:class="openMobileNav ? '' : 'hidden'"
		>
			<NuxtLink to="/" class="hover-primary" @click="toggleMobileNav">Accueil</NuxtLink>
			<NuxtLink to="/profile" class="hover-primary" @click="toggleMobileNav">Profil</NuxtLink>
			<NuxtLink to="/#skills" class="hover-primary" @click="toggleMobileNav">Compétences</NuxtLink>
			<NuxtLink to="/projects" class="hover-primary" @click="toggleMobileNav">Projets</NuxtLink>
			<NuxtLink to="/#career" class="hover-primary" @click="toggleMobileNav">Parcours</NuxtLink>
			<NuxtLink to="/#contact" class="hover-primary" @click="toggleMobileNav">Contact</NuxtLink>
		</nav>
	</header>
</template>
