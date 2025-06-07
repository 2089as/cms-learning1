import { Controller, Post, Get, Body, Query } from '@nestjs/common'; // Import Query
import { LessonsService } from './lessons.service';
import { CreateLessonDto } from '../common/dtos/create-lesson.dto';
import { Lesson } from '../common/schemas/lesson.schema';

@Controller('lessons')
export class LessonsController {
  constructor(private readonly lessonsService: LessonsService) {}

  @Post()
  create(@Body() dto: CreateLessonDto): Promise<Lesson> {
    return this.lessonsService.create(dto);
  }

  @Get()
  // Thêm @Query để đọc tham số level_id từ URL
  findAll(@Query('level_id') levelId?: string): Promise<Lesson[]> {
    return this.lessonsService.findAll(levelId); // Truyền levelId vào service
  }
}