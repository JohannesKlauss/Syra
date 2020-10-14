import { Test, TestingModule } from '@nestjs/testing';
import { AuthService } from './auth.service';
import { PrismaService } from '../prisma/prisma.service';
import { JwtService } from '@nestjs/jwt';

describe('AuthService', () => {
  let service: AuthService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AuthService, PrismaService, JwtService],
    }).compile();

    service = module.get<AuthService>(AuthService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should find user by email', async () => {
    const user = await service.validateUser('test123@syra.live', 'TesT123.Test21.4');

    expect(user).not.toBeNull();
    expect(user.name).toEqual('Test123');
  });

  it('should return null for non existing user', async () => {
    const user = await service.validateUser('NON_EXISTING_MAIL', '');

    expect(user).toBeNull();
  });
});
