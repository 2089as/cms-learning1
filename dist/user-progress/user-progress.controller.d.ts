import { UserProgressService } from './user-progress.service';
import { CreateUserProgressDto } from '../common/dtos/create-user-progress.dto';
import { UserProgress } from '../common/schemas/user-progress.schema';
export declare class UserProgressController {
    private readonly userProgressService;
    constructor(userProgressService: UserProgressService);
    create(dto: CreateUserProgressDto): Promise<UserProgress>;
    findAll(): Promise<UserProgress[]>;
    findOne(userId: string): Promise<UserProgress>;
    updateOrCreate(userId: string, dto: CreateUserProgressDto): Promise<UserProgress>;
}
