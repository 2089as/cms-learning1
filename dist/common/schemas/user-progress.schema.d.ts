import { Document, Types } from 'mongoose';
export declare class UserProgress extends Document {
    user_id: Types.ObjectId;
    current_screen: string;
    current_level: string;
    current_day: number;
    completed_days: number[];
    passed_days_details: Record<number, boolean>;
    quiz_results: Record<number, any>;
}
export declare const UserProgressSchema: import("mongoose").Schema<UserProgress, import("mongoose").Model<UserProgress, any, any, any, Document<unknown, any, UserProgress, any> & UserProgress & Required<{
    _id: unknown;
}> & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, UserProgress, Document<unknown, {}, import("mongoose").FlatRecord<UserProgress>, {}> & import("mongoose").FlatRecord<UserProgress> & Required<{
    _id: unknown;
}> & {
    __v: number;
}>;
