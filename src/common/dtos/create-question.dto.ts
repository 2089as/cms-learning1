import { IsString, IsArray } from 'class-validator';

export class CreateQuestionDto {
  @IsString()
  text: string;

  @IsArray()
  options: string[];

  @IsString()
  correct_answer: string;

  @IsString()
  lesson_id: string;
}