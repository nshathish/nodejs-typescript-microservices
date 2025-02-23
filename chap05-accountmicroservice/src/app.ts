import express, { Request, Response } from 'express';

import User from './models/user';
import { userSchema } from './validations/user.schema';

const app = express();

// connectDB().catch(console.log);

app.use(express.json());

app.get('/api/users', async (_req: Request, res: Response) => {
  try {
    const users = await User.find();
    res.json({ users });
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});


app.post('/api/users', async (req: Request, res: Response) => {
  const { error } = userSchema.validate(req.body);
  if (error) {
    res.status(400).json({ error: error.message });
  }

  const { name, email } = req.body;
  const user = new User({ name, email });

  try {
    await user.save();
    res.status(201).json({ user });
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});


export { app };