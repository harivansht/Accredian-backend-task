"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const referral_1 = require("../controllers/referral");
const validate_1 = __importDefault(require("../middleware/validate"));
const referral_2 = require("../schema/referral");
const express_1 = require("express");
const referralRouter = (0, express_1.Router)();
// POST /v1/referral - Create a new referral
referralRouter.post("/", (0, validate_1.default)(referral_2.referralSchema), referral_1.createReferral);
exports.default = referralRouter;
