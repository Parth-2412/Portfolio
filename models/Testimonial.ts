import { Schema, Model, Document } from "mongoose";
import { ITestimonial } from "../interfaces/ITestimonial";
import mongoose from "../mongoose";

const TestimonialSchema = new Schema<
	Document<ITestimonial>,
	Model<ITestimonial>,
	ITestimonial
>({
	testimonial_id: {
		type: Schema.Types.Number,
		required: true,
		unique: true,
	},
	review: {
		type: Schema.Types.String,
		required: true,
		unique: true,
	},
	author: {
		type: Schema.Types.String,
		required: true,
		unique: true,
	},
	source: {
		type: Schema.Types.String,
		required: true,
		unique: true,
	},
	link: {
		type: Schema.Types.String,
		required: false,
		unique: true,
	},
});

export default mongoose.model<ITestimonial>("Testimonial", TestimonialSchema);
