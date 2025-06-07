import { Controller, Post, Get, Body, Query } from '@nestjs/common';
import { QuizzesService } from './quizzes.service';
import { CreateQuizDto } from '../common/dtos/create-quiz.dto';
import { Quiz } from './quiz.schema';

@Controller('quizzes')
export class QuizzesController {
  constructor(private readonly quizzesService: QuizzesService) {}

  @Post()
  async create(@Body() createQuizDto: CreateQuizDto): Promise<Quiz> {
    return this.quizzesService.create(createQuizDto);
  }

  @Get()
  async findAll(@Query('level_id') levelId: string): Promise<Quiz[]> {
    return this.quizzesService.findAll(levelId);
  }
}