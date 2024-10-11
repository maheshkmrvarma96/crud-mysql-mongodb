import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Delete,
  Query,
} from '@nestjs/common';
import { UserMongodbService } from './user-mongodb.service';
import { CreateUserMongodbDto } from './dto/create-user-mongodb.dto';
import { UpdateUserMongodbDto } from './dto/update-user-mongodb.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('User-Mongodb')
@Controller('/user-mongodb')
export class UserMongodbController {
  constructor(private readonly userMongodbService: UserMongodbService) {}

  @Post('/create')
  create(@Body() createUserMysqlDto: CreateUserMongodbDto) {
    return this.userMongodbService.create(createUserMysqlDto);
  }

  @Get('/get-all')
  findAll() {
    return this.userMongodbService.findAll();
  }

  @Get('/get-one-user')
  findOne(@Query('userId') userId: string) {
    return this.userMongodbService.findOne(userId);
  }

  @Patch('/update')
  update(
    @Query('userId') userId: string,
    @Body() updateUserMysqlDto: UpdateUserMongodbDto,
  ) {
    return this.userMongodbService.update(userId, updateUserMysqlDto);
  }

  @Delete('/delete')
  remove(@Query('userId') userId: string) {
    return this.userMongodbService.remove(userId);
  }
}
