import mongoose from "mongoose";
import { print } from "../utils/color.console.js";

const connectDB = async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://kec:${encodeURIComponent(
        "kec1234"
      )}@school.b6qkdnb.mongodb.net/kec-b4-broadway?retryWrites=true&w=majority&appName=School`
    );

    print("DB connection established...");
  } catch (error) {
    print("DB connection failed...");
    print(error.message);
    process.exit();
  }
};

export default connectDB;
