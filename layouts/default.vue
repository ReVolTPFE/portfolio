<template>
	<div>
		<header>
			<NuxtLink to="/#profile">Profil</NuxtLink>
			<NuxtLink to="/#skills">Compétences</NuxtLink>
			<NuxtLink to="/portfolio">Portfolio</NuxtLink>
			<NuxtLink to="/#career">Parcours</NuxtLink>
			<NuxtLink to="/#contact">Contact</NuxtLink>
		</header>

		<main>
			<slot/>
		</main>

		<footer/>
	</div>
</template>
