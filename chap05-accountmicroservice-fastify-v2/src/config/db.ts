import mongoose from 'mongoose';

import { config } from 'dotenv';


config();

const uri = process.env.MONGO_URI || 'mongodb://root:example@localhost:27017/mydatabase?authSource=admin';

const connectToDB = async () => {
  try {
    const conn = await mongoose.connect(uri);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

export default connectToDB;