import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Certificate } from '../common/schemas/certificate.schema';
import { CreateCertificateDto } from '../common/dtos/create-certificate.dto';

@Injectable()
export class CertificatesService {
  constructor(@InjectModel(Certificate.name) private certificateModel: Model<Certificate>) {}

  async create(dto: CreateCertificateDto): Promise<Certificate> {
    const certificate = new this.certificateModel(dto);
    return certificate.save();
  }

  async findAll(): Promise<Certificate[]> {
    return this.certificateModel.find().exec();
  }
}