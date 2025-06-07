import { IsString, IsInt } from 'class-validator';

export class CreateLevelDto {
  @IsString()
  name: string;

  @IsInt()
  order: number;
}