import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Question } from '../common/schemas/question.schema';
import { CreateQuestionDto } from '../common/dtos/create-question.dto';

@Injectable()
export class QuestionsService {
  constructor(@InjectModel(Question.name) private questionModel: Model<Question>) {}

  async create(dto: CreateQuestionDto): Promise<Question> {
    const question = new this.questionModel(dto);
    return question.save();
  }

  async findAll(): Promise<Question[]> {
    return this.questionModel.find().exec();
  }
}