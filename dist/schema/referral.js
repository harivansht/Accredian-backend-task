"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.referralSchema = void 0;
const zod_1 = __importDefault(require("zod"));
// Define a zod schema for the referral object
exports.referralSchema = zod_1.default.object({
    referrerName: zod_1.default.string().nonempty(),
    referrerEmail: zod_1.default.string().email(),
    referrerPhone: zod_1.default.string().nonempty(),
    refereeName: zod_1.default.string().nonempty(),
    refereeEmail: zod_1.default.string().email(),
    refereePhone: zod_1.default.string().nonempty(),
    course: zod_1.default.string().nonempty(),
});
