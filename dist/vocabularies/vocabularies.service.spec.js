"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@nestjs/testing");
const vocabularies_service_1 = require("./vocabularies.service");
describe('VocabulariesService', () => {
    let service;
    beforeEach(async () => {
        const module = await testing_1.Test.createTestingModule({
            providers: [vocabularies_service_1.VocabulariesService],
        }).compile();
        service = module.get(vocabularies_service_1.VocabulariesService);
    });
    it('should be defined', () => {
        expect(service).toBeDefined();
    });
});
//# sourceMappingURL=vocabularies.service.spec.js.map