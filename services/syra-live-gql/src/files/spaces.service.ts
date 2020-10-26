import { BadGatewayException, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { S3 } from 'aws-sdk';
import { PassThrough } from 'stream';

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

  private writeToSpace(filename: string) {
    const Body = new PassThrough();

    this.s3.upload({
      Body,
      Key: filename,
      Bucket: this.configService.get('DO_SPACES_NAME'),
    })
      .on('httpUploadProgress', progress => {
        console.log('progress', progress);
      })
      .send((err, data) => {
        if (err) {
          Body.destroy(err);
        } else {
          console.log(`File uploaded and available at ${data.Location}`);
          Body.destroy();
        }
      });

    return Body;
  }

  async putFile(name: string, body: ReadableStream) {
    // @ts-ignore
    const pipeline = body.pipe(this.writeToSpace(name));

    pipeline.on('close', () => {
      console.log('finished');
    });
    pipeline.on('error', () => {
      console.log('error while uploading');
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
      contents: result.Body.toString(),
    };
  }
}
