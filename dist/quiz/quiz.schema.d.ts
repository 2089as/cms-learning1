import { Document } from 'mongoose';
export declare class Quiz extends Document {
    level_id: string;
    title: string;
    day: number;
    questions: {
        question: string;
        options: string[];
        correctAnswer: number;
        videoUrl?: string;
    }[];
}
export declare const QuizSchema: import("mongoose").Schema<Quiz, import("mongoose").Model<Quiz, any, any, any, Document<unknown, any, Quiz, any> & Quiz & Required<{
    _id: unknown;
}> & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Quiz, Document<unknown, {}, import("mongoose").FlatRecord<Quiz>, {}> & import("mongoose").FlatRecord<Quiz> & Required<{
    _id: unknown;
}> & {
    __v: number;
}>;
