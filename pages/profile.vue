<script setup lang="ts">
const currentYear = new Date().getFullYear();
const currentAge = currentYear - 2002;
</script>

<template>
	<div class="py-10">
		<div class="container mx-auto px-4 max-w-4xl">
			<h1 class="text-5xl text-primary font-bold text-center mb-10">Mon profil</h1>

			<p class="mb-4">Je suis Arnaud Steiner, {{ currentAge }} ans, développeur web en alternance depuis plus de 4 ans en parallèle de mes études en ingénierie logicielle.</p>
			<p class="mb-4">Passionné depuis le lycée, j'ai conçu de nombreuses applications pour des associations comme pour mes besoins quotidiens.</p>
			<p class="mb-4">Mes expériences dans trois entreprises m'ont permis d'explorer des domaines, des environnements et des projets variés, dans le but de renforcer ma maîtrise du développement web.</p>
			<p class="mb-8">Aujourd'hui, je mets cette expertise au service <strong>d'applications qui sont sécurisées, ergonomiques et adaptées aux besoins réels des utilisateurs.</strong></p>

			<h2 class="text-3xl text-secondary font-bold my-8">Mon parcours et mes valeurs</h2>
			<p class="mb-4">Depuis mes premiers projets personnels en 2018, j'ai une envie : créer des outils qui comptent vraiment. C'est une conviction qui s'est renforcée au fil des expériences, que ce soit en équipe ou lors du développement complet de solutions SaaS. Avec le temps, <strong>la rigueur</strong>, <strong>l'écoute</strong> et <strong>l'esprit d'analyse</strong> sont devenus les piliers de ma manière de travailler.</p>
			<p class="mb-4">L'ingénierie logicielle est pour moi un moyen de transformer des besoins flous en solutions simples pour les utilisateurs finaux. Grâce à plusieurs années de pratique, j'ai appris à <strong>anticiper les contraintes</strong>, à <strong>comprendre l'utilisateur</strong> et à <strong>penser à son confort</strong> dès le départ.</p>
			<p>Ce sont ces valeurs qui guident mon travail chaque jour. Elles me poussent à écouter, à clarifier, à comprendre et à fournir des projets de qualité.</p>

			<h2 class="text-3xl text-secondary font-bold my-8">Mon projet professionnel et personnel</h2>
			<p class="mb-4">En parallèle de mon alternance et de ma formation en ingénierie logicielle, j'ai objectif clair : continuer à évoluer en tant que développeur back-end spécialisé PHP/Symfony.</p>
			<p class="mb-4">Avec plusieurs années de pratique et par la création en entreprise, d'applications SaaS construites de A à Z, j'ai pu acquérir une expertise solide dans le métier.</p>
			<p class="mb-2">À long terme, mon ambition est de m'orienter vers des responsabilités où la vision technique et la compréhension du métier se rejoignent :</p>
			<ul class="list-decimal ml-8">
				<li class="mb-2">J'ai envie de développer l'architecture de projets complets, pour construire des bases solides, fiables et évolutives.</li>
				<li class="mb-2">Mais j'ai aussi envie d'apprendre dans d'autres domaines tels que le DevOps ou l'IA.</li>
				<li>Et enfin, dans le futur j'aimerai collaborer sur des projets complexes et guider une équipe.</li>
			</ul>

			<h2 class="text-3xl text-secondary font-bold my-8">Mes qualités humaines</h2>
			<p class="mb-4">Au fil de mes expériences dans différentes entreprises, j'ai appris que le développement n'est pas seulement une affaire de code : c'est d'abord un travail collectif, où les qualités humaines comptent autant que les compétences techniques.</p>
			<ul class="mb-4 list-decimal ml-8">
				<li class="mb-2">J'ai d'abord une <strong>curiosité constante</strong>, qui me pousse à expérimenter, à apprendre et à approfondir mes pratiques au quotidien, en entreprise comme sur mes projets personnels.</li>
				<li class="mb-2">Ma <strong>rigueur</strong> est garante d'un code propre, fiable et compréhensible, notamment quand je code des fonctionnalités complexes.</li>
				<li class="mb-2">Je travaille aussi mon <strong>sens de l'écoute</strong>, qui est indispensable pour comprendre les attentes des utilisateurs et transformer leurs besoins en solutions cohérentes.</li>
				<li>Enfin, j'ai une <strong>persévérance</strong> qui me permet d'aborder les défis techniques et d'aller au bout des projets les plus exigeants.</li>
			</ul>
			<p>Ces qualités forment un socle sur lequel je m'appuie pour avancer et collaborer efficacement.</p>

			<h2 class="text-3xl text-secondary font-bold my-8">Centres d'intérêt</h2>
			<p class="mb-4">En dehors du développement web, j'ai plusieurs passions qui me permettent de me déconnecter.</p>
			<p class="mb-4"><strong>La lecture :</strong> romans, thrillers ou mangas m'offrent une manière d'explorer d'autres mondes et d'alimenter mon imagination.</p>
			<p class="mb-4"><strong>Le sport automobile :</strong> le SimRacing et la Formule 1 sont des passions qui me stimulent le week-end.</p>
			<p class="mb-4"><strong>Les jeux vidéo :</strong> pour l'aspect compétitif et coopératif entre amis.</p>
			<p>Ces activités m'aident à travailler ma concentration, l'observation et le sens critique, des qualités qui se prolongent dans ma pratique professionnelle.</p>
		</div>
	</div>
</template>
