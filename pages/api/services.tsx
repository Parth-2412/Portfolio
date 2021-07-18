import { NextApiRequest, NextApiResponse } from "next";
import IService from "../../interfaces/IService";
import ReactDOMServer from "react-dom/server";
import { DesktopComputerIcon, PencilIcon } from "@heroicons/react/solid";
import { DeviceMobileIcon, GlobeIcon } from "@heroicons/react/outline";

export default (req: NextApiRequest, res: NextApiResponse<Array<IService>>) => {
	res.status(200).send([
		{
			name: "Web development",
			description:
				"Proin gravida nibh vel velit auctor aliquet aenean sollicitudin, lorem quis bibendum auctor, nisi elit",
			icon: ReactDOMServer.renderToStaticMarkup(
				<DesktopComputerIcon />
			).toString(),
			id: "1",
		},
		{
			name: "Web design",
			description:
				"Proin gravida nibh vel velit auctor aliquet aenean sollicitudin, lorem quis bibendum auctor, nisi elit",
			icon: ReactDOMServer.renderToStaticMarkup(
				<PencilIcon />
			).toString(),
			id: "2",
		},
		{
			name: "App development",
			description:
				"Proin gravida nibh vel velit auctor aliquet aenean sollicitudin, lorem quis bibendum auctor, nisi elit",
			icon: ReactDOMServer.renderToStaticMarkup(
				<DeviceMobileIcon />
			).toString(),
			id: "3",
		},
		{
			name: "Bots development",
			description:
				"Proin gravida nibh vel velit auctor aliquet aenean sollicitudin, lorem quis bibendum auctor, nisi elit",
			icon: ReactDOMServer.renderToStaticMarkup(<GlobeIcon />).toString(),
			id: "4",
		},
	]);
};
