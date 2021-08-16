import { Schema, Model, Document } from "mongoose";
import { IProject } from "../interfaces/IProject";
import mongoose from "../mongoose";

const ProjectSchema = new Schema<Document<IProject>, Model<IProject>, IProject>(
	{
		project_id: {
			type: Schema.Types.Number,
			required: true,
			unique: true,
		},
		title: {
			type: Schema.Types.String,
			required: true,
			unique: true,
		},
		codeLink: {
			type: Schema.Types.String,
			required: false,
			unique: true,
		},
		description: {
			type: Schema.Types.String,
			required: true,
		},
		image: {
			type: Schema.Types.String,
			required: true,
			unique: true,
		},
		skills: {
			type: [Schema.Types.String],
			required: true,
			unique: true,
		},
		features: {
			type: [Schema.Types.String],
			required: true,
			unique: true,
		},

		liveDemo: {
			type: Schema.Types.String,
			required: false,
			unique: true,
		},
	}
);

export default mongoose.model<IProject>("Project", ProjectSchema);
