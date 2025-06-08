import { Injectable, BadRequestException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Quiz } from './quiz.schema';
import { CreateQuizDto } from '../common/dtos/create-quiz.dto';

@Injectable()
export class QuizzesService {
  constructor(@InjectModel(Quiz.name) private quizModel: Model<Quiz>) {}

  async findAll(levelId: string): Promise<Quiz[]> {
    const quizzes = await this.quizModel.find({ level_id: levelId }).lean().exec(); // Sử dụng .lean() để tối ưu
    console.log('[QuizzesService] findAll response:', quizzes);
    return quizzes;
  }

  async create(createQuizDto: CreateQuizDto): Promise<Quiz> {
    console.log('[QuizzesService] Creating quiz with data:', createQuizDto);
    const createdQuiz = new this.quizModel(createQuizDto);
    return createdQuiz.save();
  }
}