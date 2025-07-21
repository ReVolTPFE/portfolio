<script setup lang="ts">
import SectionTitle from '~/components/SectionTitle.vue';

const form = ref<HTMLFormElement | null>(null);

onMounted(() => {
	if (form.value) {
		form.value.reset();
	}
});

if (typeof window !== 'undefined') {
	window.addEventListener('pageshow', (event) => {
		if (event.persisted) {
			if (form.value) {
				form.value.reset();
			}
		}
	});
}
</script>

<template>
	<section id="contact" class="section-spacing">
		<SectionTitle title="Contact" subtitle="Me contacter"/>
		<div class="max-w-3xl mx-auto">
			<form
				ref="form"
				action="https://formspree.io/f/xzzeaejp"
				method="POST"
				class="bg-white rounded-xl shadow-xl border p-6"
			>
				<div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
					<div>
						<label for="lastname" class="block text-sm text-gray-dark mb-1">Nom</label>
						<input
							id="lastname"
							type="text"
							name="lastname"
							class="input-style"
							placeholder="Votre nom"
							required
						>
					</div>
					<div>
						<label for="firstname" class="block text-sm text-gray-dark mb-1">Prénom</label>
						<input
							id="firstname"
							type="text"
							name="firstname"
							class="input-style"
							placeholder="Votre prénom"
							required
						>
					</div>
					<div>
						<label for="email" class="block text-sm text-gray-dark mb-1">Email</label>
						<input
							id="email"
							type="email"
							name="email"
							class="input-style"
							placeholder="Votre adresse email"
							required
						>
					</div>
					<div>
						<label for="phone" class="block text-sm text-gray-dark mb-1">Téléphone</label>
						<input
							id="phone"
							type="tel"
							name="phone"
							class="input-style"
							placeholder="Votre numéro de téléphone"
							required
						>
					</div>
					<div class="sm:col-span-2">
						<label for="message" class="block text-sm text-gray-dark mb-1">Message</label>
						<textarea
							id="message"
							name="message"
							rows="5"
							class="input-style resize-y"
							placeholder="Votre message"
							required
						/>
					</div>
				</div>
				<div class="mt-4">
					<button type="submit" class="w-full text-[14px] py-3 px-6 bg-primary text-white rounded-md">Envoyer</button>
				</div>
			</form>
		</div>
	</section>
</template>
