import { Schema, Document } from "mongoose";
import { ITestimonial } from "../interfaces/ITestimonial";
import mongoose from "../mongoose";

interface ITestimonialDoc extends ITestimonial, Document {}

const TestimonialSchema = new mongoose.Schema({
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

export default (mongoose.models
	.Testimonial as mongoose.Model<ITestimonialDoc>) ||
	mongoose.model<ITestimonialDoc>("Testimonial", TestimonialSchema);
