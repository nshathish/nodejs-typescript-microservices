import { FastifyReply, FastifyRequest } from 'fastify';
import User from '../../../models/user';

export const createUserHandler = async (
  req: FastifyRequest<{ Body: { name: string, email: string } }>,
  reply: FastifyReply
) => {
  const { email, name } = req.body;
  const user = new User({ email, name });
  try {
    await user.save();
    reply.send(user);
  } catch (error) {
    reply.status(400).send(error);
  }
};

export const getUsersHandler = async (
  req: FastifyRequest,
  reply: FastifyReply
) => {
  const users = await User.find();
  reply.send(users);
};