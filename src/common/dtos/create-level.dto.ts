import { IsString, IsNumber } from 'class-validator';

export class CreateLevelDto {
  @IsString()
  name!: string;

  @IsNumber()
  order!: number;
}
