import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { FastifyAdapter, NestFastifyApplication } from '@nestjs/platform-fastify';
import SecureSessionPlugin from 'fastify-secure-session';
import * as fs from 'fs';
import { join } from 'path';
import { CookieKeys } from '../types/CookieKeys';
import fastifyMultipart from 'fastify-multipart';

async function bootstrap() {
  const adapter = new FastifyAdapter({
    logger: true,
  });

  adapter.register(fastifyMultipart, {
    limits: {
      fieldNameSize: 100, // Max field name size in bytes
      fieldSize: 1000000, // Max field value size in bytes
      fields: 10,         // Max number of non-file fields
      fileSize: 100,      // For multipart forms, the max file size
      files: 1,           // Max number of file fields
      headerPairs: 2000,   // Max number of header key=>value pairs
    },
  });

  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    adapter,
  );

  app.enableCors({
    credentials: true,
    origin: 'http://localhost:3000'
  });

  app.register(SecureSessionPlugin, {
    key: fs.readFileSync(join(__dirname, 'session-key')),
    logLevel: 'debug',
    cookieName: CookieKeys.Session,
    cookie: {
      path: '/',
      httpOnly: true,
    }
  });

  // app.register(require('fastify-multipart'));

  await app.listen(4000);
}

bootstrap();