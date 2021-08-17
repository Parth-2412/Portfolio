import { Schema, Model, Document } from "mongoose";
import { ISkill } from "../interfaces/ISkill";
import mongoose from "../mongoose";

interface ISkillDoc extends ISkill, Document {}
const SkillSchema = new Schema({
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

export default mongoose.model<ISkillDoc>("Skill", SkillSchema);
