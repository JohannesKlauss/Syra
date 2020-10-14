import { FastifyRequest } from 'fastify';
import { JwtPayload } from './JwtPayload';

export interface JwtRequest extends FastifyRequest {
  user: JwtPayload;
  context: any
}