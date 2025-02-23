import mongoose from 'mongoose';
import { config } from 'dotenv';

config();

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI as string);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error(`Error: ${error.message}`);
    }

    console.error('Failed to connect to MongoDB');
    process.exit(1);
  }
};

export default connectDB;