import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: true })
export class Lesson extends Document {
  @Prop({ required: true })
  level_id: string;
  @Prop({ required: true })
  title: string;
  @Prop()
  video_url?: string; // Video chính của bài học
  @Prop()
  description?: string;
  @Prop({ required: true })
  day: number;
  @Prop({ type: [{ term: String, video: String, description: String }] })
  vocabulary?: { term: string; video?: string; description: string }[]; // Video riêng cho từng từ vựng là tùy chọn
}

export const LessonSchema = SchemaFactory.createForClass(Lesson);