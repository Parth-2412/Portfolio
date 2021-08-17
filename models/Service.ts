import { Schema, Model, Document } from "mongoose";
import { IService } from "../interfaces/IService";
import mongoose from "../mongoose";

interface IServiceDoc extends IService, Document {}
const serviceSchema = new Schema({
	service_id: {
		type: Schema.Types.String,
		required: true,
		unique: true,
	},
	name: {
		type: Schema.Types.String,
		required: true,
		unique: true,
	},
	description: {
		type: Schema.Types.String,
		required: false,
	},
	icon: {
		type: Schema.Types.String,
		required: true,
		unique: true,
	},
});

export default mongoose.model<IServiceDoc>("Service", serviceSchema);
