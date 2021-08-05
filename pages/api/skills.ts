import { NextApiRequest, NextApiResponse } from "next";
import { ISkill } from "../../interfaces/ISkill";

export default (req: NextApiRequest, res: NextApiResponse<ISkill[]>) => {
	res.send([
		{
			id: "react",
			title: "ReactJS",
			expertise: 80,
		},
		{
			id: "js",
			title: "JavaScript",
			expertise: 90,
		},
		{
			id: "ts",
			title: "TypeScript",
			expertise: 80,
		},
		{
			id: "tailwind",
			title: "TailwindCSS",
			expertise: 90,
		},
		{
			id: "node",
			title: "NodeJS",
			expertise: 80,
		},
		{
			id: "nextjs",
			title: "NextJS",
			expertise: 80,
		},
		{
			id: "redux",
			title: "Redux",
			expertise: 60,
		},
	]);
};
