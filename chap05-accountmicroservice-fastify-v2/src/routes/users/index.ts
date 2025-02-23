import { FastifyInstance } from 'fastify';

import { createUserHandler, getUsersHandler } from './handlers';

export const userRoutes = async (app: FastifyInstance) => {
  app.post('/api/users', createUserHandler);
  app.get('/api/users', getUsersHandler);
};