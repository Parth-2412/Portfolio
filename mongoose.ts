import mongoose from "mongoose";

mongoose.connect(process.env.MONGO_DB_URL, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
	useCreateIndex: true,
	useFindAndModify: false,
});

export default mongoose;
