import { Controller, Post, Get, Body } from '@nestjs/common';
import { VocabulariesService } from './vocabularies.service';
import { CreateVocabularyDto } from '../common/dtos/create-vocabulary.dto';
import { Vocabulary } from '../common/schemas/vocabulary.schema';

@Controller('vocabularies')
export class VocabulariesController {
  constructor(private readonly vocabulariesService: VocabulariesService) {}

  @Post()
  create(@Body() dto: CreateVocabularyDto): Promise<Vocabulary> {
    return this.vocabulariesService.create(dto);
  }

  @Get()
  findAll(): Promise<Vocabulary[]> {
    return this.vocabulariesService.findAll();
  }
}