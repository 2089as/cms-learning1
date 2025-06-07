import { Controller, Post, Get, Body, Query } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from '../common/dtos/create-user.dto';
import { User } from '../common/schemas/user.schema';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  create(@Body() dto: CreateUserDto): Promise<User> {
    return this.usersService.create(dto);
  }

  @Get()
  findByDeviceId(@Query('deviceId') deviceId: string): Promise<User> {
    return this.usersService.findByDeviceId(deviceId);
  }
}