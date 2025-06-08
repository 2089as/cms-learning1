import { Model } from 'mongoose';
import { Level } from '../common/schemas/level.schema';
import { CreateLevelDto } from '../common/dtos/create-level.dto';
export declare class LevelsService {
    private levelModel;
    constructor(levelModel: Model<Level>);
    create(dto: CreateLevelDto): Promise<Level>;
    findAll(): Promise<Level[]>;
}
