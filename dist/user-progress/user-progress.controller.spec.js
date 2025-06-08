"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@nestjs/testing");
const user_progress_controller_1 = require("./user-progress.controller");
describe('UserProgressController', () => {
    let controller;
    beforeEach(async () => {
        const module = await testing_1.Test.createTestingModule({
            controllers: [user_progress_controller_1.UserProgressController],
        }).compile();
        controller = module.get(user_progress_controller_1.UserProgressController);
    });
    it('should be defined', () => {
        expect(controller).toBeDefined();
    });
});
//# sourceMappingURL=user-progress.controller.spec.js.map