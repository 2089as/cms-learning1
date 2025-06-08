import { Model } from 'mongoose';
import { User } from '../common/schemas/user.schema';
import { CreateUserDto } from '../common/dtos/create-user.dto';
export declare class UsersService {
    private userModel;
    constructor(userModel: Model<User>);
    create(dto: CreateUserDto): Promise<User>;
    findByDeviceId(deviceId: string): Promise<User>;
}
