import dgsBeezPro from './dgs-beez-pro.json';
import dgsBeezWeb from './dgs-beez-web.json';
import dgsIleAuxCopains from './dgs-ile-aux-copains.json';
// import dgsReunionsProspectsClients from './dgs-reunions-prospects-clients.json';
import hoplunchPointeuse from './hoplunch-pointeuse.json';
import hoplunchZae from './hoplunch-zae.json';
// import iutJeuAssoDevDurable from './iut-jeu-asso-dev-durable.json';
// import iutJeuMario from './iut-jeu-mario.json';

export const projects = [
	hoplunchPointeuse,
	hoplunchZae,
	dgsBeezWeb,
	dgsBeezPro,
	dgsIleAuxCopains,
	// dgsReunionsProspectsClients,
	// iutJeuAssoDevDurable,
	// iutJeuMario,
];

export const trendingProjects = [
	hoplunchPointeuse,
	hoplunchZae,
	dgsBeezWeb,
];

export function findProjectBySlug(slug: string) {
	return projects.find((p) => p.slug === slug);
}
