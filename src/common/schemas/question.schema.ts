import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: true })
export class Question extends Document {
  @Prop({ required: true })
  text!: string;

  @Prop({ type: [String], required: true })
  options!: string[];

  @Prop({ required: true })
  correct_answer!: string;

  @Prop({ required: true })
  lesson_id!: string;
}

export const QuestionSchema = SchemaFactory.createForClass(Question);