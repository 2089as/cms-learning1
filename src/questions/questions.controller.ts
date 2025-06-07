import { Controller, Post, Get, Body } from '@nestjs/common';
import { QuestionsService } from './questions.service';
import { CreateQuestionDto } from '../common/dtos/create-question.dto';
import { Question } from '../common/schemas/question.schema';

@Controller('questions')
export class QuestionsController {
  constructor(private readonly questionsService: QuestionsService) {}

  @Post()
  create(@Body() dto: CreateQuestionDto): Promise<Question> {
    return this.questionsService.create(dto);
  }

  @Get()
  findAll(): Promise<Question[]> {
    return this.questionsService.findAll();
  }
}