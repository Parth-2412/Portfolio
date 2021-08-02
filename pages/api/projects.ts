import { NextApiRequest, NextApiResponse } from "next";
import { IProject } from "../../interfaces/IProject";

export default (req: NextApiRequest, res: NextApiResponse<IProject[]>) => {
	res.status(200).send([
		{
			id: 1,
			title: "Google Docs Clone",
			description:
				"A simple google docs clone which allows you to sign in \
				with github and google and CRUD documents realtime.",
			image: "/projects/google-docs-clone.png",
			liveDemo: "https://google-docs-clone-snowy.vercel.app/",
			skills: ["NextJS", "TailwindCSS", "Firebase", "TypeScript"],
			features: [
				"Login with Google and Github",
				"CRUD Functionality",
				"Realtime",
			],
		},
		{
			id: 2,
			title: "Github Clone",
			description:
				"A github clone made with the objective to replicate \
				the UI while also pulling data from GitHub and integrating \
				Login with Gitub.",
			image: "/projects/github-clone.png",
			liveDemo: "https://github-clone-7d9f6.web.app/",
			skills: ["ReactJS", "TailwindCSS", "Firebase"],
			features: ["Login with Github"],
		},
		{
			id: 3,
			title: "Portfolio",
			description:
				"A personal programming portfolio made to showcase my projects and skills",
			image: "/projects/portfolio.png",
			liveDemo: "https://portfolio-parth2412.vercel.app/",
			skills: ["NextJS", "TailwindCSS"],
			features: [
				"Projects",
				"Skills",
				"Services",
				"About",
				"Testimonials",
			],
		},
	]);
};
