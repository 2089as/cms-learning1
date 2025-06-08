"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@nestjs/testing");
const user_progress_service_1 = require("./user-progress.service");
describe('UserProgressService', () => {
    let service;
    beforeEach(async () => {
        const module = await testing_1.Test.createTestingModule({
            providers: [user_progress_service_1.UserProgressService],
        }).compile();
        service = module.get(user_progress_service_1.UserProgressService);
    });
    it('should be defined', () => {
        expect(service).toBeDefined();
    });
});
//# sourceMappingURL=user-progress.service.spec.js.map