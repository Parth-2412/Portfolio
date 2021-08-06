import { NextApiRequest, NextApiResponse } from "next";
import IService from "../../interfaces/IService";
import ReactDOMServer from "react-dom/server";
import { DesktopComputerIcon, PencilIcon } from "@heroicons/react/solid";
import { DeviceMobileIcon, GlobeIcon } from "@heroicons/react/outline";
import { checkAuth } from "../../util";

export const data: Array<IService> = [
	{
		name: "Web development",
		description:
			"Need help with making a website for your business? I can create just the website for you!",
		icon: ReactDOMServer.renderToStaticMarkup(
			<DesktopComputerIcon />
		).toString(),
		id: "1",
	},
	{
		name: "Web design",
		description:
			"A website with great features but the worst design isn't cool at all. Reach out if you want to have a cool design to attract your users! ",
		icon: ReactDOMServer.renderToStaticMarkup(<PencilIcon />).toString(),
		id: "2",
	},
	{
		name: "App development",
		description:
			"Apps are changing peoples life throughout the world. Want to scale your business even more with apps? Don't hesitate to contact.",
		icon: ReactDOMServer.renderToStaticMarkup(
			<DeviceMobileIcon />
		).toString(),
		id: "3",
	},
	{
		name: "Bots development",
		description:
			"Automation, scraping and more, bots have unlimited potential. I can help you if you want a really cool bot ",
		icon: ReactDOMServer.renderToStaticMarkup(<GlobeIcon />).toString(),
		id: "4",
	},
];
export default checkAuth(
	(req: NextApiRequest, res: NextApiResponse<Array<IService>>) => {
		res.status(200).send(data);
	}
);
