import { createReferral } from "@/controllers/referral";
import validateRequestBody from "@/middleware/validate";
import { referralSchema } from "@/schema/referral";
import { Router } from "express";

const referralRouter = Router();

// POST /v1/referral - Create a new referral
referralRouter.post("/", validateRequestBody(referralSchema), createReferral);

export default referralRouter;
