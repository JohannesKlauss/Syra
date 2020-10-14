import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { FastifyAdapter, NestFastifyApplication } from "@nestjs/platform-fastify";
import fastifyCookie from 'fastify-cookie';
import fastifyCors from 'fastify-cors';

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(AppModule, new FastifyAdapter({
    logger: true
  }));

  app.register(fastifyCors, {
    credentials: true,
    origin: ['http://local.syra.live:8000'],
  })
  app.register(fastifyCookie);

  await app.listen(4000);
}

bootstrap();
