import { LevelsService } from './levels.service';
import { CreateLevelDto } from '../common/dtos/create-level.dto';
import { Level } from '../common/schemas/level.schema';
export declare class LevelsController {
    private readonly levelsService;
    constructor(levelsService: LevelsService);
    create(dto: CreateLevelDto): Promise<Level>;
    findAll(): Promise<Level[]>;
}
