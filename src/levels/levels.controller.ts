import { Controller, Post, Get, Body } from '@nestjs/common';
import { LevelsService } from './levels.service';
import { CreateLevelDto } from '../common/dtos/create-level.dto';
import { Level } from '../common/schemas/level.schema';

@Controller('levels')
export class LevelsController {
  constructor(private readonly levelsService: LevelsService) {}

  @Post()
  create(@Body() dto: CreateLevelDto): Promise<Level> {
    return this.levelsService.create(dto);
  }

  @Get()
  findAll(): Promise<Level[]> {
    return this.levelsService.findAll();
  }
}