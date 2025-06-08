import { Model } from 'mongoose';
import { Lesson } from '../common/schemas/lesson.schema';
import { CreateLessonDto } from '../common/dtos/create-lesson.dto';
import { HttpService } from '@nestjs/axios';
export declare class LessonsService {
    private lessonModel;
    private readonly httpService;
    constructor(lessonModel: Model<Lesson>, httpService: HttpService);
    create(dto: CreateLessonDto): Promise<Lesson>;
    findAll(levelId?: string): Promise<Lesson[]>;
    private checkVideoEmbeddable;
    private extractVideoId;
}
