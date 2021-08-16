export interface IProject {
	project_id: number;
	title: string;
	description: string;
	image: string;
	liveDemo?: string;
	skills: string[];
	features: string[];
	codeLink?: string;
}
