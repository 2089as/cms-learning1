import { IsString, IsNumber, IsArray, IsObject, IsOptional } from 'class-validator';

export class CreateUserProgressDto {
  @IsString()
  user_id!: string;

  @IsString()
  @IsOptional()
  current_screen?: string;

  @IsString()
  @IsOptional()
  current_level?: string;

  @IsNumber()
  @IsOptional()
  current_day?: number;

  @IsArray()
  @IsOptional()
  completed_days?: number[];
  
  @IsObject()
  @IsOptional()
  passed_days_details?: Record<number, boolean>;
  
  @IsObject()
  @IsOptional()
  quiz_results?: Record<number, any>;
}
