import { IsString, IsArray, IsInt, Min, Max, IsOptional, IsObject } from 'class-validator';
import { Type } from 'class-transformer';

export class CreateUserProgressDto {
  @IsString()
  user_id: string; // ID của người dùng

  @IsString()
  @IsOptional()
  current_screen?: string;

  @IsString()
  @IsOptional()
  current_level?: string;

  @IsInt()
  @Min(1)
  @Max(30) // Giả sử tối đa 30 ngày
  @IsOptional()
  current_day?: number;

  @IsArray()
  @IsOptional()
  @IsInt({ each: true })
  completed_days?: number[];

  @IsObject()
  @IsOptional()
  passed_days_details?: Record<number, boolean>;

  @IsObject()
  @IsOptional()
  quiz_results?: Record<number, any>; // Sử dụng any hoặc định nghĩa rõ ràng hơn cấu trúc này
}