import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { FastifyAdapter, NestFastifyApplication } from '@nestjs/platform-fastify';
import SecureSessionPlugin from 'fastify-secure-session';
import * as fs from 'fs';
import { join } from 'path';
import { CookieKeys } from '../types/CookieKeys';

function Logger(...args) {
  this.args = args;
}
Logger.prototype.info = function (msg) { console.log("myLogger", msg); };
Logger.prototype.error = function (msg) { console.log("myLogger", msg); };
Logger.prototype.debug = function (msg) { console.log("myLogger", msg); };
Logger.prototype.fatal = function (msg) { console.log("myLogger", msg); };
Logger.prototype.warn = function (msg) { console.log("myLogger", msg); };
Logger.prototype.trace = function (msg) { console.log("myLogger", msg); };
Logger.prototype.child = function () { return new Logger() };


const myLogger = new Logger();

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter({
      logger: true,
    })
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

  await app.listen(4000);
}
bootstrap();
