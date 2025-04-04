// on ajoute uniquement les propriétés dont on a besoin car nuxt content en ajoute pleins d'autres
export type Project = {
    id: string;
    title: string;
    description: string;
    meta: {
        image: string;
        technologies: string;
        demoLink: string;
        codeLink: string;
        category: string;
        description: string;
        date: string;
    };
    path: string;
};
