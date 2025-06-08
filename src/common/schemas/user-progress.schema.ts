import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

@Schema({ timestamps: true })
export class UserProgress extends Document {
  @Prop({ type: Types.ObjectId, ref: 'User', required: true, unique: true })
  user_id!: Types.ObjectId;

  @Prop({ required: true, default: 'home' })
  current_screen!: string;

  @Prop({ required: false, default: '' })
  current_level!: string;

  @Prop({ required: true, default: 1 })
  current_day!: number;

  @Prop({ type: [Number], default: [] })
  completed_days!: number[];

  @Prop({ type: Map, of: Boolean, default: {} })
  passed_days_details!: Record<number, boolean>;

  @Prop({ type: Map, of: Object, default: {} })
  quiz_results!: Record<number, any>;
}

export const UserProgressSchema = SchemaFactory.createForClass(UserProgress);