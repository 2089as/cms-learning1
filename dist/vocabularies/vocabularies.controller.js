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
exports.VocabulariesController = void 0;
const common_1 = require("@nestjs/common");
const vocabularies_service_1 = require("./vocabularies.service");
const create_vocabulary_dto_1 = require("../common/dtos/create-vocabulary.dto");
let VocabulariesController = class VocabulariesController {
    constructor(vocabulariesService) {
        this.vocabulariesService = vocabulariesService;
    }
    create(dto) {
        return this.vocabulariesService.create(dto);
    }
    findAll() {
        return this.vocabulariesService.findAll();
    }
};
exports.VocabulariesController = VocabulariesController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_vocabulary_dto_1.CreateVocabularyDto]),
    __metadata("design:returntype", Promise)
], VocabulariesController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], VocabulariesController.prototype, "findAll", null);
exports.VocabulariesController = VocabulariesController = __decorate([
    (0, common_1.Controller)('vocabularies'),
    __metadata("design:paramtypes", [vocabularies_service_1.VocabulariesService])
], VocabulariesController);
//# sourceMappingURL=vocabularies.controller.js.map