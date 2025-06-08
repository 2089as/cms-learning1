import { QuizzesService } from './quizzes.service';
import { CreateQuizDto } from '../common/dtos/create-quiz.dto';
import { Quiz } from './quiz.schema';
export declare class QuizzesController {
    private readonly quizzesService;
    constructor(quizzesService: QuizzesService);
    create(createQuizDto: CreateQuizDto): Promise<Quiz>;
    findAll(levelId: string): Promise<Quiz[]>;
}
