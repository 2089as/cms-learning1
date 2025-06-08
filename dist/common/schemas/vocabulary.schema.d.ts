import { Document } from 'mongoose';
export declare class Vocabulary extends Document {
    word: string;
    meaning: string;
    lesson_id: string;
}
export declare const VocabularySchema: import("mongoose").Schema<Vocabulary, import("mongoose").Model<Vocabulary, any, any, any, Document<unknown, any, Vocabulary, any> & Vocabulary & Required<{
    _id: unknown;
}> & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Vocabulary, Document<unknown, {}, import("mongoose").FlatRecord<Vocabulary>, {}> & import("mongoose").FlatRecord<Vocabulary> & Required<{
    _id: unknown;
}> & {
    __v: number;
}>;
