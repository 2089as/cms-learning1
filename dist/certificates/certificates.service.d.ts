import { Model } from 'mongoose';
import { Certificate } from '../common/schemas/certificate.schema';
import { CreateCertificateDto } from '../common/dtos/create-certificate.dto';
export declare class CertificatesService {
    private certificateModel;
    constructor(certificateModel: Model<Certificate>);
    create(dto: CreateCertificateDto): Promise<Certificate>;
    findAll(): Promise<Certificate[]>;
}
