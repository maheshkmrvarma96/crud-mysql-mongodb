import { Module } from '@nestjs/common';
import { UserMysqlService } from './user-mysql.service';
import { UserMysqlController } from './user-mysql.controller';
import { UserMysqlRepository } from './user-mysql.repository';

@Module({
  controllers: [UserMysqlController],
  providers: [UserMysqlService, UserMysqlRepository],
  exports: [UserMysqlService],
})
export class UserMysqlModule {}
