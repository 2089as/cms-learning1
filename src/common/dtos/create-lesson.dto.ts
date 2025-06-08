import { IsString, IsOptional, IsNumber, IsArray, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

class VocabularyItem {
  @IsString()
  term!: string; // Đã sửa: Thêm '!'

  @IsString()
  @IsOptional()
  video?: string; 

  @IsString()
  description!: string; // Đã sửa: Thêm '!'
}

export class CreateLessonDto {
  @IsString()
  level_id!: string; // Đã sửa: Thêm '!'

  @IsString()
  title!: string; // Đã sửa: Thêm '!'

  @IsString()
  @IsOptional()
  video_url?: string;

  @IsString()
  @IsOptional()
  description?: string;

  @IsNumber()
  day!: number; // Đã sửa: Thêm '!'

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => VocabularyItem)
  @IsOptional()
  vocabulary?: VocabularyItem[];
}
