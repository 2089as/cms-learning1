"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@nestjs/testing");
const vocabularies_controller_1 = require("./vocabularies.controller");
describe('VocabulariesController', () => {
    let controller;
    beforeEach(async () => {
        const module = await testing_1.Test.createTestingModule({
            controllers: [vocabularies_controller_1.VocabulariesController],
        }).compile();
        controller = module.get(vocabularies_controller_1.VocabulariesController);
    });
    it('should be defined', () => {
        expect(controller).toBeDefined();
    });
});
//# sourceMappingURL=vocabularies.controller.spec.js.map