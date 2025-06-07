import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

@Schema({ timestamps: true })
export class UserProgress extends Document {
  @Prop({ type: Types.ObjectId, ref: 'User', required: true, unique: true }) // Liên kết với User
  user_id: Types.ObjectId;

  @Prop({ default: 'home' }) // Màn hình cuối cùng người dùng ở
  current_screen: string;

  @Prop({ default: '' }) // Cấp độ cuối cùng người dùng chọn
  current_level: string;

  @Prop({ default: 1 }) // Ngày cuối cùng người dùng ở
  current_day: number;

  @Prop({ type: [Number], default: [] }) // Các ngày đã hoàn thành quiz
  completed_days: number[];

  @Prop({ type: Object, default: {} }) // Chi tiết các ngày đã qua (true/false)
  passed_days_details: Record<number, boolean>;

  @Prop({ type: Object, default: {} }) // Kết quả quiz chi tiết theo ngày
  quiz_results: Record<number, any>; // Lưu kết quả quiz theo ngày

  // Các trường khác nếu bạn muốn lưu thêm
}

export const UserProgressSchema = SchemaFactory.createForClass(UserProgress);