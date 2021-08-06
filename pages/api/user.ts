import { NextApiRequest, NextApiResponse } from "next";
import IUser from "../../interfaces/IUser";
import { checkAuth } from "../../util";

export const dob = new Date(2006, 6, 24, 0, 0, 0, 0);
export default checkAuth((req: NextApiRequest, res: NextApiResponse<IUser>) => {
	res.status(200).send({
		name: "Parth",
		yearOfBirth: dob.getFullYear(),
	});
});
