import { FastifyInstance } from 'fastify';
import { readDataAsync } from '@libs/index';

async function Tests(fastify: FastifyInstance): Promise<void> {
  fastify.get('/', async (req, res) => {
    const result = await readDataAsync('005930');

    return result;
  });
}

export default Tests;
