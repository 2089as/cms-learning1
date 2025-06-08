"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@nestjs/testing");
const lessons_controller_1 = require("./lessons.controller");
describe('LessonsController', () => {
    let controller;
    beforeEach(async () => {
        const module = await testing_1.Test.createTestingModule({
            controllers: [lessons_controller_1.LessonsController],
        }).compile();
        controller = module.get(lessons_controller_1.LessonsController);
    });
    it('should be defined', () => {
        expect(controller).toBeDefined();
    });
});
//# sourceMappingURL=lessons.controller.spec.js.map