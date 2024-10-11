import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserMysqlModule } from './user-mysql/user-mysql.module';
import { UserMongodbModule } from './user-mongodb/user-mongodb.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'crud_mysql',
      entities: ['dist/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    MongooseModule.forRoot('mongodb://localhost:27017', {
      dbName: 'crud_mongodb',
    }),
    UserMysqlModule,
    UserMongodbModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
