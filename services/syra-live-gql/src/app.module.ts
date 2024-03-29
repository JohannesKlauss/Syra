import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { TypeGraphQLModule } from 'typegraphql-nestjs';
import {
  Address,
  AddressCrudResolver,
  AddressRelationsResolver, Asset, AssetRelationsResolver,
  Band,
  BandCrudResolver,
  BandRelationsResolver,
  Comment,
  CommentCrudResolver,
  CommentLike,
  CommentLikeCrudResolver,
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
  FeedItemRevisionRelationsResolver,
  Issue,
  IssueCrudResolver,
  Mixdown,
  MixdownCrudResolver,
  MixdownRelationsResolver,
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
  VersionInformationCrudResolver
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
import { RedisPubSub } from 'graphql-redis-subscriptions';
import { DynamicRedisModule } from './redis/redis.module';
import { RedisService } from 'nestjs-redis';
import { parseCookie } from './helpers/parseCookie';
import { Subscriptions } from '../types/Subscriptions';
import { PrismaModule } from './prisma/prisma.module';
import { PrismaService } from './prisma/prisma.service';
import { MailingService } from './mailing/mailing.service';
import { CustomProjectChangeResolver } from './custom/resolvers/crud/Project/CustomProjectChangeResolver';
import { BullModule } from '@nestjs/bull';
import { AudioModule } from './audio/audio.module';
import { PubSubModule } from './pub-sub/pub-sub.module';
import { PubSubService } from "./pub-sub/pub-sub.service";
import { OpenFaasModule } from './open-faas/open-faas.module';
import { CustomAssetResolver } from "./custom/resolvers/crud/Asset/CustomAssetResolver";

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    AuthModule,
    SessionModule,
    PrismaModule,
    PubSubModule,
    TypeGraphQLModule.forRootAsync({
      imports: [AuthModule, DynamicRedisModule, PrismaModule, MailingModule, PubSubModule],
      inject: [CookieStrategy, RedisService, PrismaService, MailingService, PubSubService],
      useFactory: async (
        cookieStrategy: CookieStrategy,
        redisService: RedisService,
        prismaService: PrismaService,
        mailingService: MailingService,
        pubSubService: PubSubService,
      ) => {
        const pubSub = pubSubService.getPubSub();

        return {
          validate: true,
          dateScalarMode: 'timestamp',
          playground: false,
          authChecker: cookieAuthChecker,
          path: '/',
          emitSchemaFile: true,
          uploads: false,
          globalMiddlewares: [GqlAuthGuard(), ReplaceMe()],
          context: async (ctx): Promise<GraphQLContext> => ({
            prisma: prismaService,
            mailingService,
            user: ctx.connection
              ? await cookieStrategy.validateSubscription(parseCookie(ctx.connection.context.headers.cookie).session)
              : await cookieStrategy.validate(ctx.request),
          }),
          cors: {
            origin: [
              'https://local.syra.live:3000',
              'https://bar.local.syra.live:3006',
              'https://syra.live',
              'https://daw.syra.live',
            ],
            credentials: true,
          },
          pubSub,
          installSubscriptionHandlers: true,
          subscriptions: {
            path: '/subscriptions',
            onConnect: async (params, ws, ctx) => {
              const user = await cookieStrategy.validateSubscription(parseCookie(ctx.request.headers.cookie).session);

              if (user) {
                const updatedUser = await prismaService.user.update({
                  where: { id: user.id },
                  data: { isOnline: true },
                });
                await pubSub.publish(Subscriptions.ONLINE_STATUS, updatedUser);
              }

              return ctx.request;
            },
            onDisconnect: async (websocket, ctx) => {
              const user = await cookieStrategy.validateSubscription(parseCookie(ctx.request.headers.cookie).session);

              if (user) {
                try {
                  const updatedUser = await prismaService.user.update({
                    where: { id: user.id },
                    data: { isOnline: false },
                  });

                  await pubSub.publish(Subscriptions.ONLINE_STATUS, updatedUser);
                } catch(e) {
                  console.log('e', e);
                }
              }
            },
          },
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
          dir: __dirname + '/../mailing/mailTemplates',
          adapter: new PugAdapter(),
          options: {
            strict: true,
          },
        },
      }),
    }),
    FilesModule,
    PasswordModule,
    ChatModule,
    BullModule.forRootAsync({
      imports: [DynamicRedisModule],
      inject: [RedisService],
      useFactory: async (redisService: RedisService) => {
        return {
          redis: redisService.getClient('syra-bull-queue').options,
        };
      },
    }),
    AudioModule,
    OpenFaasModule,
  ],
  controllers: [AppController],
  providers: [
    // TYPE GRAPHQL
    // Models,
    Asset,
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
    Issue,
    // Relations
    AssetRelationsResolver,
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
    IssueCrudResolver,
    VersionInformationCrudResolver,
    // Custom
    CustomUserResolver,
    CustomFeedItemResolver,
    CustomCommentResolver,
    CustomProjectChangeResolver,
    CustomAssetResolver,
  ],
})
export class AppModule {}
