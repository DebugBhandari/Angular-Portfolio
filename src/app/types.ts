
export interface Data {
    name: string;
    email: string;
    city: string;
    country: string;
    from: string;
    skills: string[][];
    education: Array<Edu>;
    projects: Array<Project>;
    languages: Array<Language>;
}

// export interface Skill {
//     frontEnd: string[];
//     backEnd: string[];
//     databases: string[];
//     mobile: string[];
//     testing: string[];
//     DevOps: string[];
// }

export interface Edu {
    organization: string;
    graduation: string;
    title: string;
    address: string;
}

export interface Project {
    title: string;
    description: string;
    tools: string;
    imageUrl: string;
    demo: string;
    gitRepo: string;
    url: string;
}

export interface Language{
    name: string;
    prof: string;
}