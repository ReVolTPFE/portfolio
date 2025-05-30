import dgsBeezPro from './dgs-beez-pro.json';
import dgsIleAuxCopains from './dgs-ile-aux-copains.json';
import dgsReunionsProspectsClients from './dgs-reunions-prospects-clients.json';
import hoplunchPointeuse from './hoplunch-pointeuse.json';
import hoplunchZae from './hoplunch-zae.json';
// import iutJeuAssoDevDurable from './iut-jeu-asso-dev-durable.json';
// import iutJeuMario from './iut-jeu-mario.json';

export const projects = [
	hoplunchPointeuse,
	hoplunchZae,
	dgsBeezPro,
	dgsIleAuxCopains,
	dgsReunionsProspectsClients,
	// iutJeuAssoDevDurable,
	// iutJeuMario,
];

export const trendingProjects = [
	hoplunchPointeuse,
	hoplunchZae,
	dgsBeezPro,
];

export function findProjectBySlug(slug: string) {
	return projects.find((p) => p.slug === slug);
}
