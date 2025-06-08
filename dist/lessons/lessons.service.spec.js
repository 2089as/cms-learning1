"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@nestjs/testing");
const lessons_service_1 = require("./lessons.service");
describe('LessonsService', () => {
    let service;
    beforeEach(async () => {
        const module = await testing_1.Test.createTestingModule({
            providers: [lessons_service_1.LessonsService],
        }).compile();
        service = module.get(lessons_service_1.LessonsService);
    });
    it('should be defined', () => {
        expect(service).toBeDefined();
    });
});
//# sourceMappingURL=lessons.service.spec.js.map