"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const config_1 = require("@nestjs/config");
const mongoose_1 = require("@nestjs/mongoose");
const mailer_1 = require("@nestjs-modules/mailer");
const axios_1 = require("@nestjs/axios");
const users_module_1 = require("./users/users.module");
const levels_module_1 = require("./levels/levels.module");
const lessons_module_1 = require("./lessons/lessons.module");
const vocabularies_module_1 = require("./vocabularies/vocabularies.module");
const questions_module_1 = require("./questions/questions.module");
const user_progress_module_1 = require("./user-progress/user-progress.module");
const certificates_module_1 = require("./certificates/certificates.module");
const quiz_module_1 = require("./quiz/quiz.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({ isGlobal: true, envFilePath: '.env' }),
            mongoose_1.MongooseModule.forRootAsync({
                imports: [config_1.ConfigModule],
                useFactory: (configService) => ({
                    uri: configService.get('MONGO_URI'),
                    useNewUrlParser: true,
                    useUnifiedTopology: true,
                    autoCreate: true,
                }),
                inject: [config_1.ConfigService],
            }),
            mailer_1.MailerModule.forRootAsync({
                imports: [config_1.ConfigModule],
                useFactory: (configService) => ({
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
                inject: [config_1.ConfigService],
            }),
            axios_1.HttpModule,
            users_module_1.UsersModule,
            levels_module_1.LevelsModule,
            lessons_module_1.LessonsModule,
            vocabularies_module_1.VocabulariesModule,
            questions_module_1.QuestionsModule,
            user_progress_module_1.UserProgressModule,
            certificates_module_1.CertificatesModule,
            quiz_module_1.QuizzesModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map