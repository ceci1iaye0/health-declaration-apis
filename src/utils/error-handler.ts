import { NextFunction, Request, Response } from "express";

import { StatusCode } from "../constants/status-code";
import { errorResponse } from "./response";

export const notFoundHandler = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  errorResponse(res, StatusCode.NotFound, "not found");
};

export const validationErrorHandler = (
  error: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => errorResponse(res, StatusCode.BadRequest, error.message);

export const errorHandler = (
  error: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => errorResponse(res, StatusCode.InternalServerError, error.message);
