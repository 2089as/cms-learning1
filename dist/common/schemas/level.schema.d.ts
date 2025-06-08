import { Document } from 'mongoose';
export declare class Level extends Document {
    name: string;
    order: number;
}
export declare const LevelSchema: import("mongoose").Schema<Level, import("mongoose").Model<Level, any, any, any, Document<unknown, any, Level, any> & Level & Required<{
    _id: unknown;
}> & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Level, Document<unknown, {}, import("mongoose").FlatRecord<Level>, {}> & import("mongoose").FlatRecord<Level> & Required<{
    _id: unknown;
}> & {
    __v: number;
}>;
