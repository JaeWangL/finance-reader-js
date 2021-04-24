import 'reflect-metadata';
import fastify, { FastifyInstance } from 'fastify';
import helmet from 'fastify-helmet';
import cors from 'fastify-cors';
import routes from './routes';
import { stringifyHealthCheck } from './common';

async function main(): Promise<FastifyInstance> {
  const app = fastify({
    logger: true,
    disableRequestLogging: true,
    trustProxy: false,
  });

  app.register(helmet);
  app.register(cors, {
    origin: true,
    credentials: true,
  });

  app.get('/health', (req, res) => {
    res.type('application/health+json');
    res.send(stringifyHealthCheck({ status: 'ok' }));
  });

  app.register(routes, { prefix: '/v1' });

  return app;
}

main()
  .then((app) => app.listen(8080, '0.0.0.0'))
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
