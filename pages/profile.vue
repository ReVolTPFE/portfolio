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
			<p class="mb-4">Mes expériences dans trois entreprises m'ont permis d'explorer des domaines variés et de renforcer ma maîtrise du développement web.</p>
			<p class="mb-8">Aujourd'hui, je mets cette expertise au service d'applications sécurisées, ergonomiques et adaptées aux besoins réels des utilisateurs.</p>

			<h2 class="text-3xl text-secondary font-bold my-8">Mon parcours et mes valeurs</h2>
			<p class="mb-4">Depuis mes premiers projets personnels, j'ai une envie principale : créer des outils qui comptent vraiment. Cette conviction s'est renforcée au fil des expériences, que ce soit en équipe ou lors du développement complet de solutions SaaS. Avec le temps, la rigueur, l'écoute et l'esprit d'analyse sont devenus les piliers de ma manière de travailler.</p>
			<p class="mb-4">L'ingénierie logicielle est pour moi un moyen de transformer des besoins flous en solutions simples. Grâce à plusieurs années de pratique, j'ai appris à anticiper les contraintes, à comprendre l'utilisateur et à penser à son confort dès le départ.</p>
			<p>Ces valeurs guident mon travail chaque jour. Elles me poussent à écouter, à clarifier, à comprendre et à fournir des projets toujours de qualité.</p>

			<h2 class="text-3xl text-secondary font-bold my-8">Mon projet professionnel et personnel</h2>
			<p class="mb-4">En parallèle de mon alternance et de ma formation en ingénierie logicielle, je poursuis un objectif clair : continuer à évoluer en tant que développeur backend spécialisé PHP/Symfony. J'y ai acquis une expertise déjà solidement ancrée par plusieurs années de pratique et par la création en entreprise, d'applications SaaS construites de A à Z.</p>
			<p class="mb-2">À long terme, mon ambition est de m'orienter vers des responsabilités où la vision technique et la compréhension du métier se rejoignent :</p>
			<ul class="list-decimal ml-8">
				<li class="mb-2">J'ai envie de développer l'architecture de projets complets, pour construire des bases solides, fiables et évolutives.</li>
				<li class="mb-2">Mais j'ai aussi envie d'apprendre dans d'autres domaines tels que le DevOps ou l'IA.</li>
				<li>Et enfin, dans le futur j'aimerai collaborer sur des projets complexes et guider mon équipe.</li>
			</ul>

			<h2 class="text-3xl text-secondary font-bold my-8">Mes qualités humaines</h2>
			<p class="mb-4">Au fil de mes expériences dans différentes structures, j'ai appris que le développement n'est pas seulement une affaire de code : c'est avant tout un travail collectif, où les qualités humaines comptent autant que les compétences techniques.</p>
			<ul class="mb-4 list-decimal ml-8">
				<li class="mb-2">J'ai d'abord une curiosité constante, qui me pousse à expérimenter, à apprendre et à approfondir mes pratiques au quotidien, en entreprise comme sur mes projets personnels.</li>
				<li class="mb-2">Je cultive ensuite, une rigueur qui est garante d'un code propre, fiable et compréhensible, notamment lors du développement de fonctionnalités complexes.</li>
				<li class="mb-2">Je développe aussi un véritable sens de l'écoute, indispensable pour comprendre les attentes des utilisateurs comme celles des équipes et transformer ces besoins en solutions cohérentes.</li>
				<li>Enfin, j'ai une persévérance qui me permet d'aborder sereinement les défis techniques et d'aller au bout des projets les plus exigeants.</li>
			</ul>
			<p>Ces qualités forment un socle sur lequel je m'appuie pour avancer et collaborer efficacement.</p>

			<h2 class="text-3xl text-secondary font-bold my-8">Centres d'intérêt</h2>
			<p class="mb-4">En dehors du développement web, j'ai plusieurs passions qui me permettent de déconnecter.</p>
			<p class="mb-4">La lecture : romans, thrillers ou mangas m'offrent une manière d'explorer d'autres mondes et d'alimenter mon imagination.</p>
			<p class="mb-4">Le sport automobile : le SimRacing et la Formule 1 sont des passions qui me stimulent le week-end.</p>
			<p class="mb-4">Les jeux vidéo : pour l'aspect compétitif et coopératif entre amis.</p>
			<p>Ces activités m'aident à développer concentration, observation et sens critique, des qualités qui se prolongent naturellement dans ma pratique professionnelle.</p>
		</div>
	</div>
</template>
