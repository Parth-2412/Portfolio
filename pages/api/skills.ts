import { NextApiRequest, NextApiResponse } from "next";
import { ISkill } from "../../interfaces/ISkill";

export default (req: NextApiRequest, res: NextApiResponse<ISkill[]>) => {
	res.send([
		{
			id: "react",
			title: "ReactJS",
			logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png",
			link: "https://reactjs.org/",
		},
		{
			id: "js",
			title: "JavaScript",
			logo: "https://www.freepnglogos.com/uploads/javascript-png/javascript-logo-transparent-logo-javascript-images-3.png",
			link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
		},
		{
			id: "ts",
			title: "TypeScript",
			logo: "https://www.typescriptlang.org/favicon.ico",
			link: "https://www.typescriptlang.org/",
		},
		{
			id: "tailwind",
			title: "TailwindCSS",
			logo: "https://tailwindcss.com/favicon.ico",
			link: "https://tailwindcss.com/",
		},
		{
			id: "node",
			title: "NodeJS",
			logo: "https://nodejs.org/static/images/favicons/favicon.ico",
			link: "https://nodejs.org/",
		},
		{
			id: "nextjs",
			title: "NextJS",
			logo: "https://cdn.worldvectorlogo.com/logos/nextjs-3.svg",
			link: "https://nextjs.org/",
		},
		{
			id: "redux",
			title: "Redux",
			logo: "https://redux.js.org/img/redux.svg",
			link: "https://redux.js.org/",
		},
	]);
};
