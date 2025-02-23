import { app } from './app';

import connectDB from './db';

const starServer = async () => {
  try {
    await connectDB();
    const port = process.env.PORT || 3000;
    app.listen(port, () => {
      console.log(`Production Server running on port ${port}`);
    });
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error(`Error: ${error.message}`);
    }
    process.exit(1);
  }
};

starServer().catch(console.log);