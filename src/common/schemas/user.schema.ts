import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: true })
export class User extends Document {
  @Prop({ required: true, unique: true })
  device_id!: string;

  @Prop({ required: false, default: '' })
  email?: string;
}

export const UserSchema = SchemaFactory.createForClass(User);