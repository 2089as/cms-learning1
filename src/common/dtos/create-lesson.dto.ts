import { IsString, IsOptional, IsNumber, IsArray, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

class VocabularyItem {
  @IsString()
  term: string;
  @IsString()
  @IsOptional() // Đảm bảo video riêng cho từng từ vựng là tùy chọn
  video?: string; 
  @IsString()
  description: string;
}

export class CreateLessonDto {
  @IsString()
  level_id: string;
  @IsString()
  title: string;
  @IsString()
  @IsOptional()
  video_url?: string; // Video chính của bài học
  @IsString()
  @IsOptional()
  description?: string;
  @IsNumber()
  day: number;
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => VocabularyItem)
  vocabulary?: VocabularyItem[];
}