import { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";
const DISCORD_WEBHOOK = process.env.DISCORD_WEBHOOK;

export default async (req: NextApiRequest, res: NextApiResponse) => {
	if (req.method === "POST") {
		try {
			const { name, email, description } = req.body;
			if (!name || !email || !description) {
				return res.status(400).send({
					message: "Name, email and description is required",
				});
			}
			if (
				!/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
					email
				)
			) {
				return res.status(400).send({
					message: "Invalid email",
				});
			}
			await axios.post(DISCORD_WEBHOOK, {
				username: name,
				embeds: [
					{
						title: "Contact Request",
						description,
						fields: [
							{
								name: "Email",
								value: email,
							},
						],
					},
				],
			});
			return res.status(204).send({});
		} catch (error) {
			console.log(error);
			return res.status(500).send({ message: "Something went wrong" });
		}
	} else {
		res.status(400).send({});
	}
};
