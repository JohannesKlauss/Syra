import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { TypeGraphQLModule } from 'typegraphql-nestjs';
import { PrismaClient } from '@prisma/client';
import { ProjectRelationsResolver, UserRelationsResolver } from '../prisma/generated/type-graphql/resolvers/relations';
import { Project, User, EarlyAccessCodes } from '../prisma/generated/type-graphql/models';
import { ProjectCrudResolver, UserCrudResolver, EarlyAccessCodesCrudResolver } from '../prisma/generated/type-graphql/resolvers/crud';
import { AuthModule } from './auth/auth.module';
import { PrismaService } from './prisma.service';
import { Context } from './types/context';
import { SignUpUserResolver } from './custom/resolvers/SignUpUserResolver';
import { config } from 'dotenv';

config();

const prisma = new PrismaClient();

@Module({
  imports: [
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
        path: __dirname + '/../../../../schema.graphql'
      },
      context: ({ req }): Context => ({ prisma, req }),
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
  ],
})
export class AppModule {
}
