import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserProgress } from '../common/schemas/user-progress.schema';
import { CreateUserProgressDto } from '../common/dtos/create-user-progress.dto';

@Injectable()
export class UserProgressService {
  constructor(@InjectModel(UserProgress.name) private userProgressModel: Model<UserProgress>) {}

  async create(dto: CreateUserProgressDto): Promise<UserProgress> {
    const userProgress = new this.userProgressModel(dto);
    return userProgress.save();
  }

  async findAll(): Promise<UserProgress[]> {
    return this.userProgressModel.find().exec();
  }

  async findByUserId(userId: string): Promise<UserProgress | null> { // <-- THÊM: Tìm theo userId
    return this.userProgressModel.findOne({ user_id: userId }).exec();
  }

  async updateOrCreate(userId: string, dto: CreateUserProgressDto): Promise<UserProgress> { // <-- THÊM: Cập nhật hoặc tạo
    // Sử dụng findOneAndUpdate với { upsert: true } để tạo mới nếu không tìm thấy
    const updatedProgress = await this.userProgressModel.findOneAndUpdate(
      { user_id: userId }, // Tìm theo user_id
      { ...dto, user_id: userId }, // Dữ liệu để cập nhật, đảm bảo user_id khớp
      { new: true, upsert: true, setDefaultsOnInsert: true } // new: trả về document sau khi update, upsert: tạo nếu không tìm thấy, setDefaultsOnInsert: áp dụng default values cho document mới
    ).exec();

    return updatedProgress;
  }
}