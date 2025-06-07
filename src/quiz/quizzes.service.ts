import { Injectable, BadRequestException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Quiz } from './quiz.schema';

@Injectable()
export class QuizzesService {
  constructor(@InjectModel(Quiz.name) private quizModel: Model<Quiz>) {}

  async findAll(levelId: string): Promise<Quiz[]> {
    return this.quizModel.find({ level_id: levelId }).exec();
  }

  async create(quizData: any): Promise<Quiz> {
    const createdQuiz = new this.quizModel(quizData);
    return createdQuiz.save();
  }
}