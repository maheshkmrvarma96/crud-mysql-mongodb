import { Injectable, Logger } from '@nestjs/common';
import { CreateUserMysqlDto } from './dto/create-user-mysql.dto';
import { UpdateUserMysqlDto } from './dto/update-user-mysql.dto';
import { UserMysqlRepository } from './user-mysql.repository';

@Injectable()
export class UserMysqlService {
  constructor(private readonly userMysqlRepository: UserMysqlRepository) {}

  private readonly logger = new Logger(UserMysqlService.name);

  create(createUserMysqlDto: CreateUserMysqlDto) {
    this.logger.log('creating user into mysql');
    return this.userMysqlRepository.save(createUserMysqlDto);
  }

  findAll() {
    return this.userMysqlRepository.find();
  }

  findOne(userId: string) {
    return this.userMysqlRepository.findOne({ where: { id: userId } });
  }

  update(userId: string, updateUserMysqlDto: UpdateUserMysqlDto) {
    this.logger.log('updating user in mysql');
    return this.userMysqlRepository.update(userId, updateUserMysqlDto);
  }

  remove(userId: string) {
    this.logger.warn('deleting user in mysql');
    return this.userMysqlRepository.delete(userId);
  }
}
