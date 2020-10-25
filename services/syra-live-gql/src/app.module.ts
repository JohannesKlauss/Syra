import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import {PrismaService} from "./prisma.service";
import { PrismaClient } from '@prisma/client';
import {TypeGraphQLModule} from "typegraphql-nestjs";
import {
  Address,
  AddressCrudResolver,
  AddressRelationsResolver,
  Comment,
  CommentCrudResolver,
  CommentLike, CommentLikeCrudResolver,
  CommentLikeRelationsResolver,
  CommentRelationsResolver,
  EarlyAccessCode,
  EarlyAccessCodeRelationsResolver,
  FeedItem,
  FeedItemCrudResolver,
  FeedItemLike,
  FeedItemLikeCrudResolver,
  FeedItemLikeRelationsResolver,
  FeedItemRelationsResolver,
  FeedItemRevision,
  FeedItemRevisionCrudResolver,
  FeedItemRevisionRelationsResolver, Mixdown, MixdownCrudResolver, MixdownRelationsResolver,
  Project,
  ProjectCrudResolver,
  ProjectRelationsResolver,
  Tag,
  TagCrudResolver,
  TagRelationsResolver,
  User,
  UserCrudResolver,
  UserRelationsResolver,
  UsersOnProjects,
  UsersOnProjectsCrudResolver,
  UsersOnProjectsRelationsResolver,
} from '../prisma/generated/type-graphql';
import { SessionModule } from './session/session.module';
import { ConfigModule } from '@nestjs/config';
import { GraphQLContext } from '../types/GraphQLContext';
import { CustomUserResolver } from './custom/resolvers/crud/User/CustomUserResolver';
import { AuthModule } from './auth/auth.module';
import { CookieStrategy } from './auth/cookie.strategy';
import { cookieAuthChecker } from './custom/authChecker/cookieAuthChecker';
import { CustomFeedItemResolver } from './custom/resolvers/crud/FeedItem/CustomFeedItemResolver';
import { FilesModule } from './files/files.module';

const prisma = new PrismaClient();

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true
    }),
    AuthModule,
    SessionModule,
    TypeGraphQLModule.forRootAsync({
      imports: [AuthModule],
      inject: [CookieStrategy],
      useFactory: async (cookieStrategy: CookieStrategy) => {
        return {
          validate: false,
          dateScalarMode: 'timestamp',
          playground: true,
          authChecker: cookieAuthChecker,
          authMode: 'null',
          introspection: true,
          path: '/',
          emitSchemaFile: true,
          context: async ({ request }): Promise<GraphQLContext> => ({
            prisma,
            user: await cookieStrategy.validate(request)
          }),
          cors: {
            origin: 'http://localhost:3000',
            credentials: true,
          },
        };
      },
    }),
    FilesModule,
  ],
  controllers: [AppController],
  providers: [
    PrismaService,

    // TYPE GRAPHQL
    // Models,
    User,
    Address,
    EarlyAccessCode,
    Tag,
    Project,
    Mixdown,
    UsersOnProjects,
    FeedItem,
    FeedItemRevision,
    Comment,
    FeedItemLike,
    CommentLike,
    // Relations
    UserRelationsResolver,
    AddressRelationsResolver,
    ProjectRelationsResolver,
    MixdownRelationsResolver,
    EarlyAccessCodeRelationsResolver,
    TagRelationsResolver,
    UsersOnProjectsRelationsResolver,
    FeedItemRelationsResolver,
    FeedItemRevisionRelationsResolver,
    CommentRelationsResolver,
    FeedItemLikeRelationsResolver,
    CommentLikeRelationsResolver,
    // Crud
    UserCrudResolver,
    AddressCrudResolver,
    TagCrudResolver,
    ProjectCrudResolver,
    MixdownCrudResolver,
    UsersOnProjectsCrudResolver,
    FeedItemCrudResolver,
    FeedItemRevisionCrudResolver,
    CommentCrudResolver,
    FeedItemLikeCrudResolver,
    CommentLikeCrudResolver,
    // Custom
    CustomUserResolver,
    CustomFeedItemResolver,
  ],
})
export class AppModule {}
