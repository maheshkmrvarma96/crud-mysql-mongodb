import { ConflictException, Injectable, Logger } from '@nestjs/common';
import { CreateUserMongodbDto } from './dto/create-user-mongodb.dto';
import { UpdateUserMongodbDto } from './dto/update-user-mongodb.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IUserMongodb } from './interface/admin_setting.interface';

@Injectable()
export class UserMongodbService {
  constructor(
    @InjectModel('UserMongodb')
    private readonly userMongodbModel: Model<IUserMongodb>,
  ) {}

  private readonly logger = new Logger(UserMongodbService.name);

  async create(createUserMysqlDto: CreateUserMongodbDto) {
    this.logger.log('creating user into mongodb');
    await new this.userMongodbModel(createUserMysqlDto).save();
    return { message: 'success' };
  }

  findAll() {
    return this.userMongodbModel.find().exec();
  }

  searchForValidId(id: string) {
    const validId = id.match(/^[0-9a-f]{24}$/);
    if (!validId) {
      this.logger.error(`Invalid id: ${id}`);
      throw new ConflictException('Invalid Id');
    }
    return validId;
  }

  async findOne(userId: string) {
    await this.searchForValidId(userId);
    return this.userMongodbModel.findOne({ _id: userId });
  }

  async update(userId: string, updateUserMysqlDto: UpdateUserMongodbDto) {
    await this.searchForValidId(userId);
    this.logger.log('updating user in mongodb');
    await this.userMongodbModel.updateOne({ _id: userId }, updateUserMysqlDto);
    return { message: 'success' };
  }

  async remove(userId: string) {
    await this.searchForValidId(userId);
    this.logger.warn('deleting user in mongodb');
    await this.userMongodbModel.findByIdAndDelete(userId);
    return { message: 'success' };
  }
}
