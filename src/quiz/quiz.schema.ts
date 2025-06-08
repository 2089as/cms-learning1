import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: true })
export class Quiz extends Document {
  @Prop({ required: true })
  level_id!: string; // Đã sửa: Thêm '!'

  @Prop({ required: true })
  title!: string; // Đã sửa: Thêm '!'

  @Prop({ required: true, min: 1, max: 30 })
  day!: number; // Đã sửa: Thêm '!'

  @Prop([
    {
      question: { type: String, required: true },
      options: [{ type: String, required: true }],
      correctAnswer: { type: Number, required: true },
      videoUrl: { type: String, required: false },
    },
  ])
  questions!: { // Đã sửa: Thêm '!'
    question: string;
    options: string[];
    correctAnswer: number;
    videoUrl?: string;
  }[];
}

export const QuizSchema = SchemaFactory.createForClass(Quiz);
