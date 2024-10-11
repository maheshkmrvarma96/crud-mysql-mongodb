import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({ collection: 'user', timestamps: true })
export class UserMongodb {
  @Prop()
  firstName: string;

  @Prop()
  lastName: string;

  @Prop()
  userName: string;

  @Prop()
  emailId: string;

  @Prop()
  mobileNumber: string;

  @Prop()
  password: string;
}

export const UserMongodbSchema = SchemaFactory.createForClass(UserMongodb);
