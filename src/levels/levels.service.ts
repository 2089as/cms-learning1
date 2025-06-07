import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Level } from '../common/schemas/level.schema';
import { CreateLevelDto } from '../common/dtos/create-level.dto';

@Injectable()
export class LevelsService {
  constructor(@InjectModel(Level.name) private levelModel: Model<Level>) {}

  async create(dto: CreateLevelDto): Promise<Level> {
    const level = new this.levelModel(dto);
    return level.save();
  }

  async findAll(): Promise<Level[]> {
    return this.levelModel.find().exec();
  }
}