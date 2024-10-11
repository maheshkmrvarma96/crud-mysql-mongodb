import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Delete,
  Query,
} from '@nestjs/common';
import { UserMysqlService } from './user-mysql.service';
import { CreateUserMysqlDto } from './dto/create-user-mysql.dto';
import { UpdateUserMysqlDto } from './dto/update-user-mysql.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('User-Mysql')
@Controller('/user-mysql')
export class UserMysqlController {
  constructor(private readonly userMysqlService: UserMysqlService) {}

  @Post('/create')
  create(@Body() createUserMysqlDto: CreateUserMysqlDto) {
    return this.userMysqlService.create(createUserMysqlDto);
  }

  @Get('/get-all')
  findAll() {
    return this.userMysqlService.findAll();
  }

  @Get('/get-one-user')
  findOne(@Query('userId') userId: string) {
    return this.userMysqlService.findOne(userId);
  }

  @Patch('/update')
  update(
    @Query('userId') userId: string,
    @Body() updateUserMysqlDto: UpdateUserMysqlDto,
  ) {
    return this.userMysqlService.update(userId, updateUserMysqlDto);
  }

  @Delete('/delete')
  remove(@Query('userId') userId: string) {
    return this.userMysqlService.remove(userId);
  }
}
