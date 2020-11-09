import { ExecutionContext, Injectable } from "@nestjs/common";
import { AuthGuard } from '@nestjs/passport';
import { GqlExecutionContext } from "@nestjs/graphql";

@Injectable()
export class CookieAuthGuard extends AuthGuard('cookie') {}