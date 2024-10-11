import { Module } from '@nestjs/common';
import { UserMongodbService } from './user-mongodb.service';
import { UserMongodbController } from './user-mongodb.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { UserMongodbSchema } from './schema/admin_settings.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'UserMongodb', schema: UserMongodbSchema },
    ]),
  ],
  controllers: [UserMongodbController],
  providers: [UserMongodbService],
})
export class UserMongodbModule {}
