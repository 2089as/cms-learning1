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
exports.UserProgressService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const user_progress_schema_1 = require("../common/schemas/user-progress.schema");
let UserProgressService = class UserProgressService {
    constructor(userProgressModel) {
        this.userProgressModel = userProgressModel;
    }
    async create(dto) {
        const userProgress = new this.userProgressModel(dto);
        return userProgress.save();
    }
    async findAll() {
        return this.userProgressModel.find().exec();
    }
    async findByUserId(userId) {
        return this.userProgressModel.findOne({ user_id: userId }).exec();
    }
    async updateOrCreate(userId, dto) {
        const updatedProgress = await this.userProgressModel.findOneAndUpdate({ user_id: userId }, Object.assign(Object.assign({}, dto), { user_id: userId }), { new: true, upsert: true, setDefaultsOnInsert: true }).exec();
        return updatedProgress;
    }
};
exports.UserProgressService = UserProgressService;
exports.UserProgressService = UserProgressService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(user_progress_schema_1.UserProgress.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], UserProgressService);
//# sourceMappingURL=user-progress.service.js.map