import { NextApiHandler, NextApiRequest, NextApiResponse } from "next";
import NextCors from "nextjs-cors";

export function formatArray(arr: string[]) {
	if (arr.length === 1) {
		return arr.join("");
	}
	return arr.slice(0, -1).join(", ") + ` and ${arr.slice(-1)[0]}`;
}

export function checkAuth(handler: NextApiHandler): NextApiHandler {
	return async (req: NextApiRequest, res: NextApiResponse) => {
		await NextCors(req, res, {
			// Options
			methods: ["GET", "HEAD", "PUT", "PATCH", "POST", "DELETE"],
			origin: [
				"http://localhost:3000/",
				"https://portfolio-parth2412.vercel.app/",
			],
			optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
		});
		handler(req, res);
	};
}
