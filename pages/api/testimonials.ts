import { NextApiRequest, NextApiResponse } from "next";
import { ITestimonial } from "../../interfaces/ITestimonial";
import { checkAuth } from "../../util";

export default checkAuth(
	(req: NextApiRequest, res: NextApiResponse<Array<ITestimonial>>) => {
		res.status(200).send([
			{
				id: 1,
				author: "Neel Patil",
				review: "Parth did a great job and completed the project in a timely manner, was able to quickly work on a solution. He also ended up making the UI look better than before. We definitely are going to use him for a larger project next time. I enjoyed working with him.",
				logo: "https://www.upwork.com/favicon.ico",
				link: "https://www.upwork.com/freelancers/~017136db70afe73400",
				source: "Upwork",
			},
			{
				id: 2,
				author: "Isak",
				review: "Went above and beyond! Highly recommended",
				logo: "https://www.upwork.com/favicon.ico",
				link: "https://www.upwork.com/freelancers/~017136db70afe73400",
				source: "Upwork",
			},
			{
				id: 3,
				author: "Rajan Sharma",
				review: "perfect work. !! Thanks Parth",
				logo: "https://www.upwork.com/favicon.ico",
				link: "https://www.upwork.com/freelancers/~017136db70afe73400",
				source: "Upwork",
			},
		]);
	}
);
