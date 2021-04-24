import { FastifyInstance } from 'fastify';
import tests from './tests';

async function Routes(fastify: FastifyInstance): Promise<void> {
  fastify.register(tests, { prefix: '/tests' });
}

export default Routes;
