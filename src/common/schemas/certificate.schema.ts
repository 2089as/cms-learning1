import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: true })
export class Certificate extends Document {
  @Prop({ required: true })
  user_id!: string;

  @Prop({ required: true })
  level_id!: string;

  @Prop({ required: false }) // Thường URL sẽ được tạo sau
  pdf_url?: string;
}

export const CertificateSchema = SchemaFactory.createForClass(Certificate);
