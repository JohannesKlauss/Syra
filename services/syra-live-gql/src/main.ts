import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { FastifyAdapter, NestFastifyApplication } from '@nestjs/platform-fastify';
import SecureSessionPlugin from 'fastify-secure-session';
import * as fs from 'fs';
import { join } from 'path';
import { CookieKeys } from '../types/CookieKeys';
import fastifyMultipart from 'fastify-multipart';

async function bootstrap() {
  const certPath = __dirname + '/../../../../';

  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter({
      logger: true,
      https: {
        key: fs.readFileSync(certPath + 'localhost.key'),
        cert: fs.readFileSync(certPath + 'localhost.crt'),
      }
    }),
  );

  app.enableCors({
    credentials: true,
    origin: ['https://local.syra.live:3000', 'https://syra.live', 'https://daw.syra.live']
  });

  app.register(SecureSessionPlugin, {
    key: fs.readFileSync(join(__dirname, 'session-key')),
    logLevel: 'debug',
    cookieName: CookieKeys.Session,
    cookie: {
      path: '/',
      domain: 'syra.live',
      httpOnly: true,
    }
  });

  app.register(fastifyMultipart);

  await app.listen(4000, '0.0.0.0');
}

bootstrap();