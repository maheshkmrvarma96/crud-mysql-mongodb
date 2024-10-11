import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsDefined, IsEmail, IsOptional, IsString } from 'class-validator';

export class CreateUserMongodbDto {
  @ApiProperty()
  @IsDefined()
  @IsString()
  firstName: string;

  @ApiProperty()
  @IsDefined()
  @IsString()
  lastName: string;

  @ApiProperty()
  @IsDefined()
  @IsString()
  userName: string;

  @ApiProperty()
  @IsDefined()
  @IsEmail()
  emailId: string;

  @ApiProperty()
  @IsOptional()
  mobileNumber: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  password: string;
}
