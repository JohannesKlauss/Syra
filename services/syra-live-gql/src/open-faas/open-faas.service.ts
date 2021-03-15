import { HttpService, Injectable } from '@nestjs/common';
import { OpenFaasFunction } from '../../types/OpenFaas';

@Injectable()
export class OpenFaasService {
  constructor(private readonly httpService: HttpService) {}

  invokeFunction(fn: OpenFaasFunction, readableStream: NodeJS.ReadableStream) {
    return this.httpService
      .post(fn, readableStream, {
        headers: { 'Content-Type': 'text/plain' },
        responseType: 'stream',
      })
      .toPromise();
  }
}
