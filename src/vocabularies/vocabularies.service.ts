import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Vocabulary } from '../common/schemas/vocabulary.schema';
import { CreateVocabularyDto } from '../common/dtos/create-vocabulary.dto';

@Injectable()
export class VocabulariesService {
  constructor(@InjectModel(Vocabulary.name) private vocabularyModel: Model<Vocabulary>) {}

  async create(dto: CreateVocabularyDto): Promise<Vocabulary> {
    const vocabulary = new this.vocabularyModel(dto);
    return vocabulary.save();
  }

  async findAll(): Promise<Vocabulary[]> {
    return this.vocabularyModel.find().exec();
  }
}