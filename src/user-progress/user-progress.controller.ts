import { Controller, Post, Get, Body, Param, Put, NotFoundException } from '@nestjs/common'; // Import Param và Put
import { UserProgressService } from './user-progress.service';
import { CreateUserProgressDto } from '../common/dtos/create-user-progress.dto';
import { UserProgress } from '../common/schemas/user-progress.schema';

@Controller('user-progress')
export class UserProgressController {
  constructor(private readonly userProgressService: UserProgressService) {}

  @Post()
  create(@Body() dto: CreateUserProgressDto): Promise<UserProgress> {
    return this.userProgressService.create(dto);
  }

  @Get() // Giữ findAll nếu bạn cần để gỡ lỗi hoặc quản lý
  findAll(): Promise<UserProgress[]> {
    return this.userProgressService.findAll();
  }

  @Get(':userId') // <-- THÊM: Lấy tiến độ của một người dùng cụ thể
  async findOne(@Param('userId') userId: string): Promise<UserProgress> {
    const userProgress = await this.userProgressService.findByUserId(userId);
    if (!userProgress) {
      throw new NotFoundException(`User progress with ID ${userId} not found`);
    }
    return userProgress;
  }

  @Put(':userId') // <-- THÊM: Cập nhật hoặc tạo tiến độ của một người dùng
  async updateOrCreate(
    @Param('userId') userId: string,
    @Body() dto: CreateUserProgressDto, // Sử dụng DTO để cập nhật dữ liệu
  ): Promise<UserProgress> {
    // Logic này có thể phức tạp hơn nếu bạn muốn chỉ cập nhật một phần
    // hoặc tạo mới nếu chưa tồn tại.
    // Trong service sẽ xử lý findOneAndUpdate hoặc upsert.
    return this.userProgressService.updateOrCreate(userId, dto);
  }
}