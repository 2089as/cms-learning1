import { IsString, IsNumber, IsArray, IsInt, Min, Max, ArrayMinSize, ArrayMaxSize } from 'class-validator';

class QuizQuestionDto {
  @IsString()
  question: string;

  @IsArray()
  @ArrayMinSize(2)
  @ArrayMaxSize(4)
  @IsString({ each: true })
  options: string[];

  @IsInt()
  @Min(0)
  @Max(3)
  correctAnswer: number;
}

export class CreateQuizDto {
  @IsString()
  level_id: string;

  @IsString()
  title: string;

  @IsInt()
  @Min(1)
  @Max(30)
  day: number;

  @IsArray()
  @ArrayMinSize(7)
  @ArrayMaxSize(7)
  questions: QuizQuestionDto[];
}