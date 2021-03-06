import { Schema, Document } from "mongoose";
import Project from "../components/Project";
import { IProject } from "../interfaces/IProject";
import mongoose from "../mongoose";

interface IProjectDoc extends IProject, Document {}
const ProjectSchema = new mongoose.Schema({
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
});

export default (mongoose.models.Project as mongoose.Model<IProjectDoc>) ||
	mongoose.model<IProjectDoc>("Project", ProjectSchema);
