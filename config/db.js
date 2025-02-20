import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect('mongodb+srv://skyler:fooddel@cluster1.xucxm.mongodb.net/fooddelivery');
    console.log("DB Connected");
  } catch (error) {
    console.error("DB connection failed", error);
  }
};
