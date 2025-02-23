import { app } from './app.ts';

import connectDB from './db.ts';

connectDB().catch(error => {
  console.error(`Error: ${error}`);
  process.exit(1);
});

export { app };