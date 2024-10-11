import { PartialType } from '@nestjs/swagger';
import { CreateUserMongodbDto } from './create-user-mongodb.dto';

export class UpdateUserMongodbDto extends PartialType(CreateUserMongodbDto) {}
