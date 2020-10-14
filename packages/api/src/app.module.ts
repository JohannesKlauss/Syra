import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { TypeGraphQLModule } from 'typegraphql-nestjs';
import { PrismaClient } from '@prisma/client';
import { ProjectRelationsResolver, UserRelationsResolver } from '../prisma/generated/type-graphql/resolvers/relations';
import { Project, User, EarlyAccessCodes } from '../prisma/generated/type-graphql/models';
import {
  ProjectCrudResolver,
  UserCrudResolver,
  EarlyAccessCodesCrudResolver,
} from '../prisma/generated/type-graphql/resolvers/crud';
import { AuthModule } from './auth/auth.module';
import { PrismaService } from './prisma/prisma.service';
import { Context } from './types/Context';
import { SignUpUserResolver } from './custom/resolvers/SignUpUserResolver';
import { MeResolver } from './custom/resolvers/MeResolver';
import { ConfigModule } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';

const prisma = new PrismaClient();

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: `.env.local`, // TODO: THIS NEEDS TO BE DYNAMIC DEPENDING ON THE ENVIRONMENT
    }),
    AuthModule,
    TypeGraphQLModule.forRoot({
      validate: false,
      dateScalarMode: 'timestamp',
      playground: {
        endpoint: '/',
      },
      introspection: true,
      path: '/',
      emitSchemaFile: {
        path: __dirname + '/../../../../schema.graphql',
      },
      context: ({ request }): Context => {
        // TODO: THIS IS QUITE HACKY BUT WORKS FOR NOW. DON'T KNOW IF THERE IS A WAY TO ACCESS SERVICES INSIDE A MODULE CREATION
        const jwtService = new JwtService({
          secret: process.env.PASSPORT_SECRET,
        });

        const { name, id } = jwtService.verify(request.cookies.Authentication);

        return { prisma, user: { name, id } };
      },
      cors: {
        origin: 'http://local.syra.live:8000',
        credentials: true,
      },
    }),
  ],
  controllers: [AppController],
  providers: [
    PrismaService,
    // Models
    User,
    Project,
    EarlyAccessCodes,
    // Relations
    UserRelationsResolver,
    ProjectRelationsResolver,
    // Crud
    UserCrudResolver,
    ProjectCrudResolver,
    EarlyAccessCodesCrudResolver,
    // Custom
    SignUpUserResolver,
    MeResolver,
  ],
})
export class AppModule {
}
