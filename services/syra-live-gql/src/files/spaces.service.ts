import { BadGatewayException, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { S3 } from 'aws-sdk';
import { PassThrough, Readable } from 'stream';
import { MD5 } from 'crypto-js';
import * as uniqid from 'uniqid';

@Injectable()
export class SpacesService {
  private s3: S3;

  constructor(private configService: ConfigService) {
    this.s3 = new S3({
      endpoint: configService.get('DO_SPACES_REGION_ENDPOINT'),
      accessKeyId: configService.get('DO_SPACES_ACCESS_KEY'),
      secretAccessKey: configService.get('DO_SPACES_SECRET_KEY'),
    });
  }

  putFile(folder: string, name: string, contentType: string, body: NodeJS.ReadableStream, isPublic: boolean = false) {
    const pipeline = body.pipe(this.writeToSpace(`${folder}/${MD5(uniqid(name)).toString()}`, contentType, isPublic));

    return new Promise<string>((resolve, reject) => {
      pipeline.on('finished', location => resolve(location));
      pipeline.on('error', err => reject(err.message));
    });
  }

  async getFile(name: string) {
    let result;

    try {
      result = await this.s3.getObject({
        Bucket: this.configService.get('DO_SPACES_NAME'),
        Key: name,
      }).promise();
    } catch (e) {
      throw new BadGatewayException('Could not download file.');
    }

    return {
      stream: new Readable({
        read() {
          this.push(result.Body)
          this.push(null)
        },
      }),
      mimeType: result.ContentType,
    };
  }

  private writeToSpace(filename: string, contentType: string, isPublic: boolean = false) {
    const Body = new PassThrough();

    this.s3.upload({
      Body,
      Key: filename,
      ContentType: contentType,
      Bucket: this.configService.get('DO_SPACES_NAME'),
      ACL: isPublic ? 'public-read' : 'private'
    })
      .send((err, data) => {
        if (err) {
          Body.emit('error', err);
          Body.destroy(err);
        } else {
          Body.emit('finished', data.Location);
          Body.destroy();
        }
      });

    return Body;
  }
}
