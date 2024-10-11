import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { UserMysql } from './entities/user-mysql.entity';

@Injectable()
export class UserMysqlRepository extends Repository<UserMysql> {
  constructor(public dataSource: DataSource) {
    super(UserMysql, dataSource.createEntityManager());
  }
}
