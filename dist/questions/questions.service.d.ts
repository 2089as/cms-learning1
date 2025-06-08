import { Model } from 'mongoose';
import { Question } from '../common/schemas/question.schema';
import { CreateQuestionDto } from '../common/dtos/create-question.dto';
export declare class QuestionsService {
    private questionModel;
    constructor(questionModel: Model<Question>);
    create(dto: CreateQuestionDto): Promise<Question>;
    findAll(): Promise<Question[]>;
}
