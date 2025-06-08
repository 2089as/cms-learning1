"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LessonsService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const lesson_schema_1 = require("../common/schemas/lesson.schema");
const axios_1 = require("@nestjs/axios");
const rxjs_1 = require("rxjs");
let LessonsService = class LessonsService {
    constructor(lessonModel, httpService) {
        this.lessonModel = lessonModel;
        this.httpService = httpService;
    }
    async create(dto) {
        if (!dto.level_id || !dto.title || dto.day === undefined || dto.day === null) {
            throw new common_1.BadRequestException('level_id, title, and day are required fields');
        }
        let embedVideoUrl = dto.video_url;
        if (dto.video_url) {
            const isEmbeddable = await this.checkVideoEmbeddable(dto.video_url);
            if (!isEmbeddable) {
                throw new common_1.BadRequestException('Video is not embeddable');
            }
            const videoId = this.extractVideoId(dto.video_url);
            if (videoId) {
                embedVideoUrl = `https://www.youtube.com/embed/${videoId}`;
            }
        }
        const lesson = new this.lessonModel(Object.assign(Object.assign({}, dto), { video_url: embedVideoUrl, day: Number(dto.day) }));
        return lesson.save();
    }
    async findAll(levelId) {
        const query = {};
        if (levelId) {
            query.level_id = levelId;
        }
        const lessons = await this.lessonModel.find(query).exec();
        return lessons.map((lesson) => {
            const lessonObj = lesson.toObject();
            let dayValue;
            if (lessonObj.day !== undefined && lessonObj.day !== null) {
                if (typeof lessonObj.day === 'object' && '$numberInt' in lessonObj.day) {
                    dayValue = parseInt(lessonObj.day.$numberInt || '0');
                }
                else {
                    dayValue = Number(lessonObj.day);
                }
            }
            return Object.assign(Object.assign({}, lessonObj), { day: dayValue, createdAt: lessonObj.createdAt ? new Date(lessonObj.createdAt).toISOString() : undefined, updatedAt: lessonObj.updatedAt ? new Date(lessonObj.updatedAt).toISOString() : undefined });
        });
    }
    async checkVideoEmbeddable(videoUrl) {
        const videoId = this.extractVideoId(videoUrl);
        if (!videoId) {
            throw new common_1.BadRequestException('Invalid YouTube URL');
        }
        const apiKey = process.env.YOUTUBE_API_KEY;
        if (!apiKey) {
            throw new common_1.BadRequestException('YouTube API key is not configured');
        }
        try {
            const url = `https://www.googleapis.com/youtube/v3/videos?part=status&id=${videoId}&key=${apiKey}`;
            const response = await (0, rxjs_1.firstValueFrom)(this.httpService.get(url));
            const data = response.data;
            if (data.items && data.items.length > 0) {
                return data.items[0].status.embeddable;
            }
            throw new common_1.BadRequestException('Video not found');
        }
        catch (error) {
            throw new common_1.BadRequestException(`Error checking video embeddable: ${error.message}`);
        }
    }
    extractVideoId(url) {
        const match = url.match(/(?:youtube\.com\/(?:[^\/]+\/[^\/]+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/ ]{11})/);
        return match ? match[1] : null;
    }
};
exports.LessonsService = LessonsService;
exports.LessonsService = LessonsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(lesson_schema_1.Lesson.name)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        axios_1.HttpService])
], LessonsService);
//# sourceMappingURL=lessons.service.js.map