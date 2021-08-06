import { NextApiRequest, NextApiResponse } from "next";
import IUser from "../../interfaces/IUser";
import { checkAuth } from "../../util";

const dob = new Date(2006, 6, 24, 0, 0, 0, 0);
export default checkAuth((req: NextApiRequest, res: NextApiResponse<IUser>) => {
	const now = new Date();
	now.setMonth(6);
	now.setDate(24);
	res.status(200).send({
		name: "Parth",
		age: now.getFullYear() - dob.getFullYear(),
	});
});
