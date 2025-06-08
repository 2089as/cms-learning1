import { QuestionsService } from './questions.service';
import { CreateQuestionDto } from '../common/dtos/create-question.dto';
import { Question } from '../common/schemas/question.schema';
export declare class QuestionsController {
    private readonly questionsService;
    constructor(questionsService: QuestionsService);
    create(dto: CreateQuestionDto): Promise<Question>;
    findAll(): Promise<Question[]>;
}
