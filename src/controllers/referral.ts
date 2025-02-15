import express from "express";
import prisma from "@/config/database";

export const createReferral = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const requestBody = req.body;

    // check if the referral already exists for the referrer and referee
    const existingReferral = await prisma.referral.findFirst({
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
    await prisma.referral.create({
      data: requestBody,
    });

    res.status(201).json({
      status: "success",
      message: "Referral created successfully",
      data: requestBody,
    });
  } catch (error) {
    console.error("Error creating referral: ", error);
    res.status(500).json({
      status: "error",
      message: "Error creating referral",
    });
  }
};
