import { UsersService } from './users.service';
import { CreateUserDto } from '../common/dtos/create-user.dto';
import { User } from '../common/schemas/user.schema';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    create(dto: CreateUserDto): Promise<User>;
    findByDeviceId(deviceId: string): Promise<User>;
}
