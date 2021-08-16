import mongoose from "mongoose";

mongoose.connect(process.env.MONGO_DB_URL);

export default mongoose;
