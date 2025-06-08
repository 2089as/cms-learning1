"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserProgressSchema = exports.UserProgress = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let UserProgress = class UserProgress extends mongoose_2.Document {
};
exports.UserProgress = UserProgress;
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.Types.ObjectId, ref: 'User', required: true, unique: true }),
    __metadata("design:type", mongoose_2.Types.ObjectId)
], UserProgress.prototype, "user_id", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, default: 'home' }),
    __metadata("design:type", String)
], UserProgress.prototype, "current_screen", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: false, default: '' }),
    __metadata("design:type", String)
], UserProgress.prototype, "current_level", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, default: 1 }),
    __metadata("design:type", Number)
], UserProgress.prototype, "current_day", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: [Number], default: [] }),
    __metadata("design:type", Array)
], UserProgress.prototype, "completed_days", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Map, of: Boolean, default: {} }),
    __metadata("design:type", Object)
], UserProgress.prototype, "passed_days_details", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Map, of: Object, default: {} }),
    __metadata("design:type", Object)
], UserProgress.prototype, "quiz_results", void 0);
exports.UserProgress = UserProgress = __decorate([
    (0, mongoose_1.Schema)({ timestamps: true })
], UserProgress);
exports.UserProgressSchema = mongoose_1.SchemaFactory.createForClass(UserProgress);
//# sourceMappingURL=user-progress.schema.js.map