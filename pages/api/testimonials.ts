import { NextApiRequest, NextApiResponse } from "next";
import { ITestimonial } from "../../interfaces/ITestimonial";

export const data: Array<ITestimonial> = [
	{
		testimonial_id: 1,
		author: "Neel Patil",
		review: "Parth dtestimonial_id a great job and completed the project in a timely manner, was able to quickly work on a solution. He also ended up making the UI look better than before. We definitely are going to use him for a larger project next time. I enjoyed working with him.",
		link: "https://www.upwork.com/freelancers/~017136db70afe73400",
		source: "Upwork",
	},
	{
		testimonial_id: 2,
		author: "Isak",
		review: "Went above and beyond! Highly recommended",
		link: "https://www.upwork.com/freelancers/~017136db70afe73400",
		source: "Upwork",
	},
	{
		testimonial_id: 3,
		author: "Rajan Sharma",
		review: "perfect work. !! Thanks Parth",
		link: "https://www.upwork.com/freelancers/~017136db70afe73400",
		source: "Upwork",
	},
];
export default (
	req: NextApiRequest,
	res: NextApiResponse<Array<ITestimonial>>
) => {
	res.status(200).send(data);
};
