import { NextFunction, Request, Response } from "express";

import HealthDeclaration from "../models/HealthDeclaration";
import { successResponse } from "../utils/response";

/**
 * POST /health-declaration
 * Submit a health declaration
 */
export const postHealthDeclaration = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { name, temperature, symptoms, closeContact } = req.body;

  const healthDeclaration = new HealthDeclaration({
    name,
    temperature,
    symptoms,
    closeContact,
  });

  try {
    const result = await healthDeclaration.save();
    successResponse(res, result);
  } catch (error) {
    next(error);
  }
};

/**
 * GET /health-declarations
 * Get all health declarations
 */
export const getHealthDeclarations = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const healthDeclarations = await HealthDeclaration.find();

  try {
    res.send(healthDeclarations);
  } catch (error) {
    next(error);
  }
};
