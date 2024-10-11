import { Test, TestingModule } from '@nestjs/testing';
import { UserMongodbController } from './user-mongodb.controller';
import { UserMongodbService } from './user-mongodb.service';

describe('UserMongodbController', () => {
  let controller: UserMongodbController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserMongodbController],
      providers: [UserMongodbService],
    }).compile();

    controller = module.get<UserMongodbController>(UserMongodbController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
