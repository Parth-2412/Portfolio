import { NextApiRequest, NextApiResponse } from "next";
import { IProject } from "../../interfaces/IProject";

export default (req: NextApiRequest, res: NextApiResponse<IProject[]>) => {
	res.status(200).send([
		{
			id: 1,
			title: "Google Docs Clone",
			description:
				"Made with nextjs, tailwind and firebase. You can sign in/sign out. Create documents, edit them and delete them. Realtime functionality is added too",
			image: "/projects/google-docs-clone.png",
			liveDemo: "https://google-docs-clone-snowy.vercel.app/",
		},
		{
			id: 2,
			title: "Github Clone",
			description:
				"Made with React and Tailwind CSS. Directly connected to the github api. Sign in with github implemented",
			image: "/projects/github-clone.png",
			liveDemo: "https://github-clone-7d9f6.web.app/",
		},
	]);
};
