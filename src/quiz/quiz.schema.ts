import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

@Schema({ timestamps: true })
export class Quiz extends Document {
  @Prop({ required: true })
  level_id: string;

  @Prop({ required: true })
  title: string;

  @Prop({ required: true, min: 1, max: 30 })
  day: number;

  @Prop([
    {
      question: { type: String, required: true },
      options: [{ type: String, required: true }],
      correctAnswer: { type: Number, required: true },
    },
  ])
  questions: {
    question: string;
    options: string[];
    correctAnswer: number;
  }[];
}

export const QuizSchema = SchemaFactory.createForClass(Quiz);