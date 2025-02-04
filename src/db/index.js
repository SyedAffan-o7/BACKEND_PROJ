import express from "express";
import { DB_NAME } from "../constants.js";
import mongoose from "mongoose";
const app = express();

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(
      `${process.env.MONGODB_URI}/${DB_NAME}`
    );
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (err) {
    console.error("error DB connection:", err);
    process.exit(1);
  }
};

export default connectDB;
