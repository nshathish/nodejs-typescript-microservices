import Fastify, { FastifyInstance, RouteShorthandOptions } from 'fastify';
import { config } from 'dotenv';

import { userRoutes } from './routes/users';

import connectToDB from './config/db';


config();

const app: FastifyInstance = Fastify({ logger: true });

connectToDB().catch(console.error);

app.register(userRoutes);

const start = async () => {
  try {
    const port = parseInt(process.env.PORT || '3000');
    await app.listen({ port });
  } catch (err) {
    app.log.error(err);
    process.exit(1);
  }
};

start().catch(console.error);