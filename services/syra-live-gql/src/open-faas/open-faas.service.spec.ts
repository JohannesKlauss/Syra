import { Test, TestingModule } from '@nestjs/testing';
import { OpenFaasService } from './open-faas.service';

describe('OpenFaasService', () => {
  let service: OpenFaasService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OpenFaasService],
    }).compile();

    service = module.get<OpenFaasService>(OpenFaasService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
