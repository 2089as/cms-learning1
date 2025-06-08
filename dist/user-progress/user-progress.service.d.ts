import { Model } from 'mongoose';
import { UserProgress } from '../common/schemas/user-progress.schema';
import { CreateUserProgressDto } from '../common/dtos/create-user-progress.dto';
export declare class UserProgressService {
    private userProgressModel;
    constructor(userProgressModel: Model<UserProgress>);
    create(dto: CreateUserProgressDto): Promise<UserProgress>;
    findAll(): Promise<UserProgress[]>;
    findByUserId(userId: string): Promise<UserProgress | null>;
    updateOrCreate(userId: string, dto: CreateUserProgressDto): Promise<UserProgress>;
}
