"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@nestjs/testing");
const levels_service_1 = require("./levels.service");
describe('LevelsService', () => {
    let service;
    beforeEach(async () => {
        const module = await testing_1.Test.createTestingModule({
            providers: [levels_service_1.LevelsService],
        }).compile();
        service = module.get(levels_service_1.LevelsService);
    });
    it('should be defined', () => {
        expect(service).toBeDefined();
    });
});
//# sourceMappingURL=levels.service.spec.js.map