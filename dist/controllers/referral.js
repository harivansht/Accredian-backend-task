"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createReferral = void 0;
const database_1 = __importDefault(require("../config/database"));
const createReferral = async (req, res) => {
    try {
        const requestBody = req.body;
        // check if the referral already exists for the referrer and referee
        const existingReferral = await database_1.default.referral.findFirst({
            where: {
                referrerEmail: requestBody.referrerEmail,
                refereeEmail: requestBody.refereeEmail,
            },
        });
        if (existingReferral) {
            res.status(400).json({
                message: "Referral already exists",
            });
            return;
        }
        // create a new referral
        await database_1.default.referral.create({
            data: requestBody,
        });
        res.status(201).json({
            status: "success",
            message: "Referral created successfully",
            data: requestBody,
        });
    }
    catch (error) {
        console.error("Error creating referral: ", error);
        res.status(500).json({
            status: "error",
            message: "Error creating referral",
        });
    }
};
exports.createReferral = createReferral;
