import Image from "next/image";
import { ITestimonial } from "../interfaces/ITestimonial";

function Testimonial({
	testimonial: { logo, review, author },
	extraClasses = "",
}: {
	testimonial: ITestimonial;
	extraClasses?: string;
}) {
	return (
		<div className={"p-10 rounded-lg mx-auto" + " " + extraClasses}>
			<p className="max-w-prose whitespace-normal">"{review}"</p>
			<Image src={logo} width={50} height={50} />
			{author}
		</div>
	);
}

export default Testimonial;
