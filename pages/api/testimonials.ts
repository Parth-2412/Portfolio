import { NextApiRequest, NextApiResponse } from "next";
import { ITestimonial } from "../../interfaces/ITestimonial";

export default (
	req: NextApiRequest,
	res: NextApiResponse<Array<ITestimonial>>
) => {
	res.status(200).send([
		{
			id: 1,
			author: "John Doe",
			review: "Parth did a great job and completed the project in a timely manner, was able to quickly work on a solution. He also ended up making the UI look better than before. We definitely are going to use him for a larger project next time. I enjoyed working with him.",
			logo: "https://www.upwork.com/favicon.ico",
			link: "https://www.upwork.com/freelancers/~017136db70afe73400",
		},
		{
			id: 2,
			author: "Jane Doe",
			review: "Parth did a great job and completed the project in a timely manner, was able to quickly work on a solution. He also ended up making the UI look better than before. We definitely are going to use him for a larger project next time. I enjoyed working with him.",
			logo: "https://www.upwork.com/favicon.ico",
			link: "https://www.upwork.com/freelancers/~017136db70afe73400",
		},
	]);
};
