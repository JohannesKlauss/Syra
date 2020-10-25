import { BadGatewayException, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { S3 } from 'aws-sdk';

@Injectable()
export class SpacesService {
  private s3: S3;

  constructor(private configService: ConfigService) {
    this.s3 = new S3({
      endpoint: configService.get('DO_SPACES_REGION_ENDPOINT'),
      accessKeyId: configService.get('DO_SPACES_ACCESS_KEY'),
      secretAccessKey: configService.get('DO_SPACES_SECRET_KEY')
    });
  }

  async putFile(name: string, body: string) {
    let result;

    try {
      result = await this.s3.putObject({
        Bucket: this.configService.get('DO_SPACES_NAME'),
        Key: name,
        Body: body,
        ACL: "private"
      }).promise();
    } catch (e) {
      throw new BadGatewayException('Could not upload file.');
    }

    return result.$response.data;
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
      contents: result.Body.toString()
    };
  }
}
