import { LessonsService } from './lessons.service';
import { CreateLessonDto } from '../common/dtos/create-lesson.dto';
import { Lesson } from '../common/schemas/lesson.schema';
export declare class LessonsController {
    private readonly lessonsService;
    constructor(lessonsService: LessonsService);
    create(dto: CreateLessonDto): Promise<Lesson>;
    findAll(levelId?: string): Promise<Lesson[]>;
}
