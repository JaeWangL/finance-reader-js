import { FastifyInstance } from 'fastify';

async function Tests(fastify: FastifyInstance): Promise<void> {
  fastify.get('/', async (req, res) => 'Hello World');
}

export default Tests;
