import { MongooseModuleOptions } from '@nestjs/mongoose';

export const databaseConfig: MongooseModuleOptions = {
  uri: process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/football_signs',
};