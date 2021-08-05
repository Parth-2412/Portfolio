import Image from "next/image";
import { ITestimonial } from "../interfaces/ITestimonial";

function Testimonial({
	testimonial: { logo, review, author, source, link },
	extraClasses = "",
}: {
	testimonial: ITestimonial;
	extraClasses?: string;
}) {
	return (
		<a href={link}>
			<div
				className={
					"md:p-12 p-5 flex flex-col cursor-pointer hover:shadow-xl justify-between items-start rounded-2xl my-5 md:mx-10 mx-2 space-y-8 shadow-md" +
					" " +
					extraClasses
				}
			>
				<p className="text-lg text-center">" {review} "</p>
				<div className="flex items-center space-x-4">
					{/* <Image
						src={logo}
						width={50}
						height={50}
						className="rounded-full"
					/> */}
					<div className="flex flex-col items-start">
						<p className="font-semibold text-lg">{author}</p>
						<p className="text-sm">{source}</p>
					</div>
				</div>
			</div>
		</a>
	);
}

export default Testimonial;
