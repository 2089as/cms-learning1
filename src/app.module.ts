import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { MailerModule } from '@nestjs-modules/mailer';
import { HttpModule } from '@nestjs/axios';
import { UsersModule } from './users/users.module';
import { LevelsModule } from './levels/levels.module';
import { LessonsModule } from './lessons/lessons.module';
import { VocabulariesModule } from './vocabularies/vocabularies.module';
import { QuestionsModule } from './questions/questions.module';
import { UserProgressModule } from './user-progress/user-progress.module';
import { CertificatesModule } from './certificates/certificates.module';
import { QuizzesModule } from './quiz/quiz.module';
@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, envFilePath: '.env' }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        uri: configService.get<string>('MONGO_URI'),
        useNewUrlParser: true,
        useUnifiedTopology: true,
        autoCreate: true,
      }),
      inject: [ConfigService],
    }),
    MailerModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        transport: {
          host: 'smtp.gmail.com',
          port: 587,
          auth: {
            user: configService.get('EMAIL_USER'),
            pass: configService.get('EMAIL_PASS'),
          },
        },
        defaults: { from: '"Football Signs" <no-reply@yourdomain.com>' },
      }),
      inject: [ConfigService],
    }),
    HttpModule,
    UsersModule,
    LevelsModule,
    LessonsModule,
    VocabulariesModule,
    QuestionsModule,
    UserProgressModule,
    CertificatesModule,
    QuizzesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}