<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import SwiperCore from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import LinkButton from '~/components/LinkButton.vue';

SwiperCore.use([Navigation, Pagination]);

const route = useRoute();
const slug = route.params.slug as string;

const { data: project } = await useAsyncData(`project-${slug}`, () =>
	queryCollection('projects').where('slug', '=', slug).first()
);

if (!project.value) {
	throw createError({ statusCode: 404, statusMessage: 'Projet introuvable' });
}

// Modal logic
const selectedImage = ref<string | null>(null);
const openImage = (src: string) => {
	selectedImage.value = src;
};
const closeImage = () => {
	selectedImage.value = null;
};
</script>

<template>
	<div v-if="project" class="py-10">
		<div class="container mx-auto px-4 max-w-4xl">
			<!-- Retour -->
			<LinkButton
				link="/projects"
				bg-color="bg-primary"
				text="Retour aux projets"
				left-arrow
			/>

			<!-- Hero -->
			<h1 class="text-4xl md:text-5xl font-bold text-center mb-4 text-primary mt-8">
				{{ project.title }}
			</h1>
			<p class="text-lg text-gray-600 text-center mb-6 leading-relaxed">{{ project.description }}</p>

			<!-- Badges méta -->
			<div class="flex flex-wrap justify-center gap-3 mb-6">
				<span class="bg-primary text-white px-4 py-2 rounded-full text-sm font-medium">
					Client : {{ project.actors?.client }}
				</span>
				<span class="bg-primary text-white px-4 py-2 rounded-full text-sm font-medium">
					Projet : {{ project.companyProject }}
				</span>
				<span class="bg-primary text-white px-4 py-2 rounded-full text-sm font-medium">
					Mon entreprise : {{ project.company }}
				</span>
				<span class="bg-primary text-white px-4 py-2 rounded-full text-sm font-medium">
					Date : {{ project.date }}
				</span>
			</div>

			<!-- Lien démo -->
			<div v-if="project.demoLink" class="flex justify-center mb-8">
				<a
					:href="project.demoLink"
					target="_blank"
					class="bg-primary text-center py-2.5 px-5 rounded-md inline-block text-white"
				>
					Voir le projet
				</a>
			</div>

			<!-- Carousel images -->
			<section v-if="project.images && project.images.length" class="mb-12">
				<Swiper
					:slides-per-view="1"
					:space-between="20"
					:breakpoints="{
						768: { slidesPerView: 2 }
					}"
					navigation
					pagination
					class="rounded-lg"
				>
					<SwiperSlide v-for="(image, index) in project.images" :key="index" class="cursor-pointer">
						<img
							:src="image.src"
							:alt="image.alt"
							class="w-full h-80 object-cover rounded-xl shadow hover:scale-105 transition-transform"
							@click="openImage(image.src)"
						>
					</SwiperSlide>
				</Swiper>
			</section>

			<!-- Modal Lightbox -->
			<div
				v-if="selectedImage"
				class="fixed inset-0 bg-black/80 flex items-center justify-center z-50 cursor-pointer"
				@click="closeImage"
			>
				<img :src="selectedImage" class="w-auto max-h-[95vh] rounded-lg shadow-lg">
			</div>

			<!-- Technologies (pills compactes) -->
			<section class="mb-10">
				<div class="flex flex-wrap justify-center gap-3">
					<NuxtLink
						v-for="(tech, index) in project.technologies"
						:key="index"
						to="/#skills"
						class="flex items-center gap-2 px-3 py-1.5 bg-primary/10 rounded-full hover:bg-primary/20 transition-colors"
					>
						<Icon :name="tech.icon" class="text-primary w-5 h-5" />
						<span class="text-sm font-medium text-gray-800">{{ tech.text }}</span>
					</NuxtLink>
				</div>
			</section>

			<hr class="border-gray-200 mb-10">

			<!-- Corps article (rendu markdown) -->
			<article class="prose prose-lg max-w-none prose-headings:text-primary prose-a:text-tertiary">
				<ContentRenderer :value="project" />
			</article>

			<hr class="border-gray-200 mt-10 mb-10">

			<!-- Compétences utilisées -->
			<section v-if="project.skillLinks && project.skillLinks.length">
				<h2 class="text-2xl font-bold text-primary mb-4">Compétences utilisées</h2>
				<div class="flex flex-wrap gap-2">
					<NuxtLink
						v-for="(skill, index) in project.skillLinks"
						:key="index"
						:to="`/skills/${skill.link}`"
						class="px-3 py-1 bg-primary/10 text-primary rounded-full hover:bg-primary/20 transition-colors"
					>
						{{ skill.text }}
					</NuxtLink>
				</div>
			</section>

			<!-- Retour projets -->
			<div class="flex justify-center mt-12">
				<LinkButton link="/projects" bg-color="bg-primary" text="Voir mes autres projets" />
			</div>
		</div>
	</div>

	<div v-else class="text-center py-20 text-gray-400">Projet introuvable.</div>
</template>
