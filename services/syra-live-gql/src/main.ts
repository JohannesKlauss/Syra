import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { FastifyAdapter, NestFastifyApplication } from '@nestjs/platform-fastify';
import SecureSessionPlugin from 'fastify-secure-session';
import * as fs from 'fs';
import { join } from 'path';
import { CookieKeys } from '../types/CookieKeys';
import fastifyMultipart from 'fastify-multipart';

async function bootstrap() {
  const PORT = (process.env.PORT || 4000) as number;

  const certPath = __dirname + '/../../../../';

  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter({
      logger: true,
      https: process.env.NODE_ENV !== 'production' && {
        key: fs.readFileSync(certPath + 'local.syra.live.key'),
        cert: fs.readFileSync(certPath + 'local.syra.live.crt'),
      },
    }),
  );

  app.enableCors({
    credentials: true,
    origin: ['https://local.syra.live:3000', 'https://syra.live', 'https://daw.syra.live'],
  });

  await app.register(SecureSessionPlugin, {
    key: fs.readFileSync(join(__dirname, 'session-key')),
    logLevel: 'debug',
    cookieName: CookieKeys.Session,
    cookie: {
      path: '/',
      domain: 'syra.live',
      httpOnly: true,
    },
  });

  await app.register(fastifyMultipart);

  await app.listen(PORT, '0.0.0.0');
}

bootstrap();
