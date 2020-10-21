import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {PrismaService} from "./prisma.service";
import { PrismaClient } from '@prisma/client';
import {TypeGraphQLModule} from "typegraphql-nestjs";
import {
  Address,
  AddressCrudResolver,
  AddressRelationsResolver, EarlyAccessCode, EarlyAccessCodeRelationsResolver,
  Project, ProjectCrudResolver,
  ProjectRelationsResolver,
  Tag, TagCrudResolver,
  TagRelationsResolver,
  User,
  UserCrudResolver,
  UserRelationsResolver,
  UsersOnProjects, UsersOnProjectsCrudResolver, UsersOnProjectsRelationsResolver,
} from '../prisma/generated/type-graphql';
import { SessionModule } from './session/session.module';
import { ConfigModule } from '@nestjs/config';
import { GraphQLContext } from '../types/GraphQLContext';
import { CustomUserResolver } from './custom/resolvers/crud/User/CustomUserResolver';

const prisma = new PrismaClient();

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true
    }),
    TypeGraphQLModule.forRoot({
      validate: false,
      dateScalarMode: 'timestamp',
      playground: {
        endpoint: '/graphql',
      },
      introspection: true,
      path: '/',
      emitSchemaFile: true,
      context: (): GraphQLContext => ({ prisma }),
      cors: {
        origin: 'http://localhost:3000',
        credentials: true,
      },
    }),
    SessionModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    PrismaService,
    // Models,
    User,
    Address,
    EarlyAccessCode,
    Tag,
    Project,
    UsersOnProjects,
    // Relations
    UserRelationsResolver,
    AddressRelationsResolver,
    ProjectRelationsResolver,
    EarlyAccessCodeRelationsResolver,
    TagRelationsResolver,
    UsersOnProjectsRelationsResolver,
    // Crud
    UserCrudResolver,
    AddressCrudResolver,
    TagCrudResolver,
    ProjectCrudResolver,
    UsersOnProjectsCrudResolver,
    // Custom
    CustomUserResolver,
  ],
})
export class AppModule {}
