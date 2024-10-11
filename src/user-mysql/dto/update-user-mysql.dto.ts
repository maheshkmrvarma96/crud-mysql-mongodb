import { PartialType } from '@nestjs/swagger';
import { CreateUserMysqlDto } from './create-user-mysql.dto';

export class UpdateUserMysqlDto extends PartialType(CreateUserMysqlDto) {}
