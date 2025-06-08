"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@nestjs/testing");
const levels_controller_1 = require("./levels.controller");
describe('LevelsController', () => {
    let controller;
    beforeEach(async () => {
        const module = await testing_1.Test.createTestingModule({
            controllers: [levels_controller_1.LevelsController],
        }).compile();
        controller = module.get(levels_controller_1.LevelsController);
    });
    it('should be defined', () => {
        expect(controller).toBeDefined();
    });
});
//# sourceMappingURL=levels.controller.spec.js.map