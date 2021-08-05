import React, { useState } from "react";
import { ITestimonial } from "../interfaces/ITestimonial";
import SectionTitle from "./SectionTitle";
import Testimonial from "./Testimonial";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { useMediaQuery } from "react-responsive";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/outline";

const AllTestimonials = React.forwardRef<
	HTMLDivElement,
	{
		testimonials: ITestimonial[];
	}
>(({ testimonials }, ref) => {
	const [selected, setSelected] = useState(1);
	const isNotMobile = useMediaQuery({ query: "(min-width : 1024px)" });
	const arrowClassName =
		"w-10 h-8 cursor-pointer hover:text-gray-700 md:block hidden";
	return (
		<div ref={ref} className="flex relative flex-col items-center">
			<div className="self-start mb-7">
				<SectionTitle title="Trusted By Clients" />
			</div>

			<Carousel
				showStatus={false}
				showIndicators={false}
				autoPlay
				infiniteLoop
				showArrows={false}
				selectedItem={selected}
				onChange={(i) => setSelected(i)}
				showThumbs={false}
				width={"80vw"}
				className="max-w-7xl"
				centerMode={isNotMobile}
				centerSlidePercentage={60}
				// dynamicHeight
			>
				{testimonials.map((testimonial, i) => {
					return (
						<Testimonial
							testimonial={testimonial}
							key={testimonial.id}
							extraClasses={
								isNotMobile && i !== selected
									? "opacity-70"
									: ""
							}
						/>
					);
				})}
			</Carousel>
			<div className="flex space-x-2 text-gray-400 mt-4">
				<ArrowLeftIcon
					className={arrowClassName}
					onClick={() => {
						setSelected((selected) => selected - 1);
					}}
				/>
				<ArrowRightIcon
					className={arrowClassName}
					onClick={() => {
						setSelected((selected) => selected + 1);
					}}
				/>
			</div>
		</div>
	);
});

export default AllTestimonials;
