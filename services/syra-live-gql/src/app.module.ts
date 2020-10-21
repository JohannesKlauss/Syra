import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {PrismaService} from "./prisma.service";
import { PrismaClient } from '@prisma/client';
import {TypeGraphQLModule} from "typegraphql-nestjs";
import {
  Address,
  AddressCrudResolver,
  AddressRelationsResolver,
  EarylAccessCode,
  EarylAccessCodeRelationsResolver,
  Project, ProjectCrudResolver,
  ProjectRelationsResolver,
  Tag, TagCrudResolver,
  TagRelationsResolver,
  User,
  UserCrudResolver,
  UserRelationsResolver,
  UsersOnProjects, UsersOnProjectsCrudResolver, UsersOnProjectsRelationsResolver,
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
        origin: 'http://localhost:3000',
        credentials: true,
      },
    }),
  ],
  controllers: [AppController],
  providers: [
    AppService,
    PrismaService,
    // Models,
    User,
    Address,
    EarylAccessCode,
    Tag,
    Project,
    UsersOnProjects,
    // Relations
    UserRelationsResolver,
    AddressRelationsResolver,
    ProjectRelationsResolver,
    EarylAccessCodeRelationsResolver,
    TagRelationsResolver,
    UsersOnProjectsRelationsResolver,
    // Crud
    UserCrudResolver,
    AddressCrudResolver,
    TagCrudResolver,
    ProjectCrudResolver,
    UsersOnProjectsCrudResolver
  ],
})
export class AppModule {}
