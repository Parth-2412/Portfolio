import { Schema, Document } from "mongoose";
import { ISkill } from "../interfaces/ISkill";
import mongoose from "../mongoose";

interface ISkillDoc extends ISkill, Document {}
const SkillSchema = new mongoose.Schema({
	skill_id: {
		type: Schema.Types.String,
		required: true,
		unique: true,
	},
	title: {
		type: Schema.Types.String,
		required: true,
		unique: true,
	},
	logo: {
		type: Schema.Types.String,
		required: true,
		unique: true,
	},
	link: {
		type: Schema.Types.String,
		required: true,
		unique: true,
	},
});

export default (mongoose.models.Skill as mongoose.Model<ISkillDoc>) ||
	mongoose.model<ISkillDoc>("Skill", SkillSchema);
