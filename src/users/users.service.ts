import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from '../common/schemas/user.schema';
import { CreateUserDto } from '../common/dtos/create-user.dto';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  async create(dto: CreateUserDto): Promise<User> {
    const user = new this.userModel({
      ...dto,
      created_at: new Date(),
    });
    return user.save();
  }

  async findByDeviceId(deviceId: string): Promise<User> {
    const user = await this.userModel.findOne({ device_id: deviceId }).exec();
    if (!user) throw new NotFoundException('User not found');
    return user;
  }
}