import { HttpModule, Module } from '@nestjs/common';
import { OpenFaasService } from './open-faas.service';

@Module({
  imports: [HttpModule],
  providers: [OpenFaasService],
  exports: [OpenFaasService],
})
export class OpenFaasModule {}
