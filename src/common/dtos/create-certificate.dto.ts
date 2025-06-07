import { IsString, IsOptional } from 'class-validator';

export class CreateCertificateDto {
  @IsString()
  user_id: string;

  @IsString()
  level_id: string;

  @IsOptional()
  @IsString()
  pdf_url?: string;
}