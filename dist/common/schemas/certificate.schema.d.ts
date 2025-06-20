import { Document } from 'mongoose';
export declare class Certificate extends Document {
    user_id: string;
    level_id: string;
    pdf_url?: string;
}
export declare const CertificateSchema: import("mongoose").Schema<Certificate, import("mongoose").Model<Certificate, any, any, any, Document<unknown, any, Certificate, any> & Certificate & Required<{
    _id: unknown;
}> & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Certificate, Document<unknown, {}, import("mongoose").FlatRecord<Certificate>, {}> & import("mongoose").FlatRecord<Certificate> & Required<{
    _id: unknown;
}> & {
    __v: number;
}>;
