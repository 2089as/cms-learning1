import { Document } from 'mongoose';
export declare class Question extends Document {
    text: string;
    options: string[];
    correct_answer: string;
    lesson_id: string;
}
export declare const QuestionSchema: import("mongoose").Schema<Question, import("mongoose").Model<Question, any, any, any, Document<unknown, any, Question, any> & Question & Required<{
    _id: unknown;
}> & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Question, Document<unknown, {}, import("mongoose").FlatRecord<Question>, {}> & import("mongoose").FlatRecord<Question> & Required<{
    _id: unknown;
}> & {
    __v: number;
}>;
