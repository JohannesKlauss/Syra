import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { PrismaService } from './prisma.service';
import { PrismaClient } from '@prisma/client';
import { TypeGraphQLModule } from 'typegraphql-nestjs';
import {
  Address,
  AddressCrudResolver,
  AddressRelationsResolver, Band, BandCrudResolver, BandRelationsResolver,
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
  UsersOnProjectsRelationsResolver
} from "../prisma/generated/type-graphql";
import { SessionModule } from './session/session.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { GraphQLContext } from '../types/GraphQLContext';
import { CustomUserResolver } from './custom/resolvers/crud/User/CustomUserResolver';
import { AuthModule } from './auth/auth.module';
import { CookieStrategy } from './auth/cookie.strategy';
import { cookieAuthChecker } from './custom/authChecker/cookieAuthChecker';
import { CustomFeedItemResolver } from './custom/resolvers/crud/FeedItem/CustomFeedItemResolver';
import { FilesModule } from './files/files.module';
import { ReplaceMe } from './custom/middleware/ReplaceMe';
import { GqlAuthGuard } from './custom/middleware/GqlAuthGuard';
import { CustomCommentResolver } from './custom/resolvers/crud/Comment/CustomCommentResolver';
import { PasswordModule } from './password/password.module';
import { MailerModule } from '@nestjs-modules/mailer';
import { MailingModule } from './mailing/mailing.module';
import { PugAdapter } from '@nestjs-modules/mailer/dist/adapters/pug.adapter';
import { ChatModule } from './chat/chat.module';
import { RedisPubSub } from "graphql-redis-subscriptions";
import { DynamicRedisModule } from "./redis/redis.module";
import { RedisService } from "nestjs-redis";

const prisma = new PrismaClient();

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    AuthModule,
    SessionModule,
    TypeGraphQLModule.forRootAsync({
      imports: [AuthModule, DynamicRedisModule],
      inject: [CookieStrategy, RedisService],
      useFactory: async (cookieStrategy: CookieStrategy, redisService: RedisService) => {
        return {
          validate: true,
          dateScalarMode: 'timestamp',
          playground: false,
          authChecker: cookieAuthChecker,
          path: '/',
          emitSchemaFile: true,
          uploads: false,
          globalMiddlewares: [GqlAuthGuard(), ReplaceMe()],
          context: async ({ request }): Promise<GraphQLContext> => ({
            prisma,
            user: await cookieStrategy.validate(request),
          }),
          cors: {
            origin: ['https://local.syra.live:3000', 'https://syra.live', 'https://daw.syra.live'],
            credentials: true,
          },
          pubSub: new RedisPubSub({
            publisher: redisService.getClient('syra-publisher'),
            subscriber: redisService.getClient('syra-subscriber'),
          }),
          installSubscriptionHandlers: true,
        };
      },
    }),
    MailerModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => ({
        transport: `smtp://apikey:${configService.get('SENDGRID_API_KEY')}@smtp.sendgrid.net`,
        defaults: {
          from: '"Syra Admin" <admin@syra.live>',
        },
        template: {
          dir: __dirname + '/../mailTemplates',
          adapter: new PugAdapter(),
          options: {
            strict: true,
          },
        },
      }),
    }),
    FilesModule,
    PasswordModule,
    MailingModule,
    ChatModule,
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
    Band,
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
    BandRelationsResolver,
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
    BandCrudResolver,
    // Custom
    CustomUserResolver,
    CustomFeedItemResolver,
    CustomCommentResolver,
  ],
})
export class AppModule {
}
