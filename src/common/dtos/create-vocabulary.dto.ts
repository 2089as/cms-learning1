import { IsString } from 'class-validator';

export class CreateVocabularyDto {
  @IsString()
  word: string;

  @IsString()
  meaning: string;

  @IsString()
  lesson_id: string;
}