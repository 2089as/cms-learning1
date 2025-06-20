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
exports.UserProgressController = void 0;
const common_1 = require("@nestjs/common");
const user_progress_service_1 = require("./user-progress.service");
const create_user_progress_dto_1 = require("../common/dtos/create-user-progress.dto");
let UserProgressController = class UserProgressController {
    constructor(userProgressService) {
        this.userProgressService = userProgressService;
    }
    create(dto) {
        return this.userProgressService.create(dto);
    }
    findAll() {
        return this.userProgressService.findAll();
    }
    async findOne(userId) {
        const userProgress = await this.userProgressService.findByUserId(userId);
        if (!userProgress) {
            throw new common_1.NotFoundException(`User progress with ID ${userId} not found`);
        }
        return userProgress;
    }
    async updateOrCreate(userId, dto) {
        return this.userProgressService.updateOrCreate(userId, dto);
    }
};
exports.UserProgressController = UserProgressController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_user_progress_dto_1.CreateUserProgressDto]),
    __metadata("design:returntype", Promise)
], UserProgressController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UserProgressController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':userId'),
    __param(0, (0, common_1.Param)('userId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UserProgressController.prototype, "findOne", null);
__decorate([
    (0, common_1.Put)(':userId'),
    __param(0, (0, common_1.Param)('userId')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, create_user_progress_dto_1.CreateUserProgressDto]),
    __metadata("design:returntype", Promise)
], UserProgressController.prototype, "updateOrCreate", null);
exports.UserProgressController = UserProgressController = __decorate([
    (0, common_1.Controller)('user-progress'),
    __metadata("design:paramtypes", [user_progress_service_1.UserProgressService])
], UserProgressController);
//# sourceMappingURL=user-progress.controller.js.map