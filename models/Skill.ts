import { Schema, Model, Document } from "mongoose";
import { ISkill } from "../interfaces/ISkill";
import mongoose from "../mongoose";

const SkillSchema = new Schema<Document<ISkill>, Model<ISkill>, ISkill>({
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

export default mongoose.model<ISkill>("Skill", SkillSchema);
