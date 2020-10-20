import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {PrismaService} from "./prisma.service";
import { PrismaClient } from '@prisma/client';
import {TypeGraphQLModule} from "typegraphql-nestjs";
import {
  Address, AddressCrudResolver,
  AddressRelationsResolver,
  User,
  UserCrudResolver,
  UserRelationsResolver
} from '../prisma/generated/type-graphql';

const prisma = new PrismaClient();

type Context = {
  prisma: PrismaClient;
}

@Module({
  imports: [
    TypeGraphQLModule.forRoot({
      validate: false,
      dateScalarMode: 'timestamp',
      playground: {
        endpoint: '/graphql',
      },
      introspection: true,
      path: '/',
      emitSchemaFile: true,
      context: (): Context => ({ prisma }),
      cors: {
        origin: 'http://localhost:8000',
        credentials: true,
      },
    }),
  ],
  controllers: [AppController],
  providers: [
    AppService,
    PrismaService,
    User,
    Address,
    // Relations
    UserRelationsResolver,
    AddressRelationsResolver,
    // Crud
    UserCrudResolver,
    AddressCrudResolver,
  ],
})
export class AppModule {}
