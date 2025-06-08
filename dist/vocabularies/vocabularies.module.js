"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VocabulariesModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const vocabularies_controller_1 = require("./vocabularies.controller");
const vocabularies_service_1 = require("./vocabularies.service");
const vocabulary_schema_1 = require("../common/schemas/vocabulary.schema");
let VocabulariesModule = class VocabulariesModule {
};
exports.VocabulariesModule = VocabulariesModule;
exports.VocabulariesModule = VocabulariesModule = __decorate([
    (0, common_1.Module)({
        imports: [mongoose_1.MongooseModule.forFeature([{ name: vocabulary_schema_1.Vocabulary.name, schema: vocabulary_schema_1.VocabularySchema }])],
        controllers: [vocabularies_controller_1.VocabulariesController],
        providers: [vocabularies_service_1.VocabulariesService],
    })
], VocabulariesModule);
//# sourceMappingURL=vocabularies.module.js.map