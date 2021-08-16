import { NextApiRequest, NextApiResponse } from "next";
import IUser from "../../interfaces/IUser";

export default (req: NextApiRequest, res: NextApiResponse<IUser>) => {
	res.status(200).send({
		name: "Parth",
	});
};
