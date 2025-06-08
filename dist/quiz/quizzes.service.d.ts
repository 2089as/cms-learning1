import { Model } from 'mongoose';
import { Quiz } from './quiz.schema';
import { CreateQuizDto } from '../common/dtos/create-quiz.dto';
export declare class QuizzesService {
    private quizModel;
    constructor(quizModel: Model<Quiz>);
    findAll(levelId: string): Promise<Quiz[]>;
    create(createQuizDto: CreateQuizDto): Promise<Quiz>;
}
