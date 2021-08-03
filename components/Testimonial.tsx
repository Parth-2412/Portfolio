import Image from "next/image";
import { ITestimonial } from "../interfaces/ITestimonial";

function Testimonial({
	testimonial: { logo, review },
}: {
	testimonial: ITestimonial;
}) {
	return (
		<div className="p-10 max-w-xl rounded-lg mx-auto">
			<p>"{review}"</p>
			<Image src={logo} width={50} height={50} />
		</div>
	);
}

export default Testimonial;
