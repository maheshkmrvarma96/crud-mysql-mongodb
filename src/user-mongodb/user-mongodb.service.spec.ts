import { Test, TestingModule } from '@nestjs/testing';
import { UserMongodbService } from './user-mongodb.service';

describe('UserMongodbService', () => {
  let service: UserMongodbService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserMongodbService],
    }).compile();

    service = module.get<UserMongodbService>(UserMongodbService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
