import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { TypeGraphQLModule } from "typegraphql-nestjs";
import { PrismaClient } from "@prisma/client";
import { ProjectRelationsResolver, UserRelationsResolver } from "../prisma/generated/type-graphql/resolvers/relations";
import { Project, User } from "../prisma/generated/type-graphql/models";
import { ProjectCrudResolver, UserCrudResolver } from "../prisma/generated/type-graphql/resolvers/crud";

interface Context {
  prisma: PrismaClient;
}

const prisma = new PrismaClient();

@Module({
  imports: [
    TypeGraphQLModule.forRoot({
      validate: false,
      dateScalarMode: 'timestamp',
      playground: {
        endpoint: '/',
      },
      introspection: true,
      path: '/',
      emitSchemaFile: true,
      context: (): Context => ({ prisma })
    })
  ],
  controllers: [AppController],
  providers: [
    // Models
    User,
    Project,
    // Relations
    UserRelationsResolver,
    ProjectRelationsResolver,
    // Crud
    UserCrudResolver,
    ProjectCrudResolver,
    // Custom
  ]
})
export class AppModule {
}
