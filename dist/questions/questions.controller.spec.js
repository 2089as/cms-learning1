"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@nestjs/testing");
const questions_controller_1 = require("./questions.controller");
describe('QuestionsController', () => {
    let controller;
    beforeEach(async () => {
        const module = await testing_1.Test.createTestingModule({
            controllers: [questions_controller_1.QuestionsController],
        }).compile();
        controller = module.get(questions_controller_1.QuestionsController);
    });
    it('should be defined', () => {
        expect(controller).toBeDefined();
    });
});
//# sourceMappingURL=questions.controller.spec.js.map