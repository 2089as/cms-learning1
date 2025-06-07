import { Controller, Post, Get, Body } from '@nestjs/common';
import { CertificatesService } from './certificates.service';
import { CreateCertificateDto } from '../common/dtos/create-certificate.dto';
import { Certificate } from '../common/schemas/certificate.schema';

@Controller('certificates')
export class CertificatesController {
  constructor(private readonly certificatesService: CertificatesService) {}

  @Post()
  create(@Body() dto: CreateCertificateDto): Promise<Certificate> {
    return this.certificatesService.create(dto);
  }

  @Get()
  findAll(): Promise<Certificate[]> {
    return this.certificatesService.findAll();
  }
}