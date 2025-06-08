import { IsString, IsOptional } from 'class-validator';

export class CreateUserDto {
  @IsString()
  device_id!: string;

  @IsString()
  @IsOptional()
  email?: string;
}
