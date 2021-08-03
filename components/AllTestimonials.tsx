import React, { useState } from "react";
import { ITestimonial } from "../interfaces/ITestimonial";
import SectionTitle from "./SectionTitle";
import Testimonial from "./Testimonial";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const AllTestimonials = React.forwardRef<
	HTMLDivElement,
	{
		testimonials: ITestimonial[];
	}
>(({ testimonials }, ref) => {
	const [selected, setSelected] = useState(0);
	return (
		<div ref={ref} className="w-full">
			<SectionTitle title="What trusted clients say" />
			{/* <div className="relative">
				<div className="flex overflow-x-scroll no-scrollbar space-x-20  w-4/5 mx-auto"></div>
			</div> */}
			<Carousel
				showStatus={false}
				showIndicators={false}
				infiniteLoop
				autoPlay
				showArrows={false}
				selectedItem={selected}
				onChange={(i) => setSelected(i)}
				centerMode
				centerSlidePercentage={60}
			>
				{testimonials.map((testimonial, i) => (
					<Testimonial
						testimonial={testimonial}
						key={testimonial.id}
					/>
				))}
			</Carousel>
		</div>
	);
});

export default AllTestimonials;
