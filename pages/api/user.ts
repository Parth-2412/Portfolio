import { NextApiRequest, NextApiResponse } from "next";
import IUser from "../../interfaces/IUser";

const dob = new Date(2006, 6, 24, 0, 0, 0, 0);
export default (req: NextApiRequest, res: NextApiResponse<IUser>) => {
	const now = new Date();
	now.setMonth(6);
	now.setDate(24);
	res.status(200).send({
		name: "Parth",
		age: now.getFullYear() - dob.getFullYear(),
	});
};
