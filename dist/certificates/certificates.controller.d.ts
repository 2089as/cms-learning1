import { CertificatesService } from './certificates.service';
import { CreateCertificateDto } from '../common/dtos/create-certificate.dto';
import { Certificate } from '../common/schemas/certificate.schema';
export declare class CertificatesController {
    private readonly certificatesService;
    constructor(certificatesService: CertificatesService);
    create(dto: CreateCertificateDto): Promise<Certificate>;
    findAll(): Promise<Certificate[]>;
}
