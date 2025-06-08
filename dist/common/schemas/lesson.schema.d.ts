import { Document } from 'mongoose';
declare class VocabularyItem {
    term: string;
    description: string;
    video?: string;
}
export declare class Lesson extends Document {
    level_id: string;
    title: string;
    video_url?: string;
    description?: string;
    day: number;
    vocabulary: VocabularyItem[];
}
export declare const LessonSchema: import("mongoose").Schema<Lesson, import("mongoose").Model<Lesson, any, any, any, Document<unknown, any, Lesson, any> & Lesson & Required<{
    _id: unknown;
}> & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Lesson, Document<unknown, {}, import("mongoose").FlatRecord<Lesson>, {}> & import("mongoose").FlatRecord<Lesson> & Required<{
    _id: unknown;
}> & {
    __v: number;
}>;
export {};
