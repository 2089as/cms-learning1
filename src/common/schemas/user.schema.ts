import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: { createdAt: 'created_at' } })
export class User extends Document {
  @Prop({ required: true, unique: true })
  device_id: string;

  @Prop()
  email?: string;
}

export const UserSchema = SchemaFactory.createForClass(User);