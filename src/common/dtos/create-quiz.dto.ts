// src/common/dtos/create-quiz.dto.ts

import { IsString, IsArray, IsInt, Min, Max, ArrayMinSize, ArrayMaxSize, IsOptional, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

class QuizQuestionDto {
  @IsString()
  question!: string; // Đã sửa: Thêm '!'

  @IsArray()
  @ArrayMinSize(2)
  @ArrayMaxSize(4)
  @IsString({ each: true })
  options!: string[]; // Đã sửa: Thêm '!'

  @IsInt()
  @Min(0)
  @Max(3)
  correctAnswer!: number; // Đã sửa: Thêm '!'

  @IsString()
  @IsOptional()
  videoUrl?: string; // Thuộc tính này là tùy chọn (optional) nên không cần '!'
}

export class CreateQuizDto {
  @IsString()
  level_id!: string; // Đã sửa: Thêm '!'

  @IsString()
  title!: string; // Đã sửa: Thêm '!'

  @IsInt()
  @Min(1)
  @Max(30)
  day!: number; // Đã sửa: Thêm '!'

  @IsArray()
  @ArrayMinSize(7)
  @ArrayMaxSize(7)
  @ValidateNested({ each: true })
  @Type(() => QuizQuestionDto)
  questions!: QuizQuestionDto[]; // Đã sửa: Thêm '!'
}
