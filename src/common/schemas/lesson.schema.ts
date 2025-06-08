import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ _id: false }) // Không tạo _id cho sub-document
class VocabularyItem {
    @Prop({ required: true })
    term!: string;

    @Prop({ required: true })
    description!: string;

    @Prop({ required: false })
    video?: string;
}
const VocabularyItemSchema = SchemaFactory.createForClass(VocabularyItem);


@Schema({ timestamps: true })
export class Lesson extends Document {
  @Prop({ required: true })
  level_id!: string;

  @Prop({ required: true })
  title!: string;

  @Prop({ required: false })
  video_url?: string;

  @Prop({ required: false })
  description?: string;

  @Prop({ required: true })
  day!: number;
  
  @Prop({ type: [VocabularyItemSchema], default: [] })
  vocabulary!: VocabularyItem[];
}

export const LessonSchema = SchemaFactory.createForClass(Lesson);