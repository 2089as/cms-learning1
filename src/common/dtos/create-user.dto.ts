import { IsString, IsOptional } from 'class-validator';

export class CreateUserDto {
  @IsString()
  device_id: string;

  @IsOptional()
  @IsString()
  email?: string;
}