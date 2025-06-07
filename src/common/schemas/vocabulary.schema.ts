import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: true })
export class Vocabulary extends Document {
  @Prop({ required: true })
  word: string;

  @Prop({ required: true })
  meaning: string;

  @Prop({ required: true })
  lesson_id: string;
}

export const VocabularySchema = SchemaFactory.createForClass(Vocabulary);