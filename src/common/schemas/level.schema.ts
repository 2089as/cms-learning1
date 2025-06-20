import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: true })
export class Level extends Document {
  @Prop({ required: true, unique: true })
  name!: string;

  @Prop({ required: true })
  order!: number;
}

export const LevelSchema = SchemaFactory.createForClass(Level);
