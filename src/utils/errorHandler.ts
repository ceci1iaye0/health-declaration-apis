import { NextFunction, Request, Response } from "express";

import { ErrorMessages } from "../constants/errorMessages";
import { StatusCodes } from "../constants/statusCodes";
import { errorResponse } from "./response";

export const notFoundHandler = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  errorResponse(res, StatusCodes.NotFound, ErrorMessages.NotFound);
};

export const validationErrorHandler = (
  error: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => errorResponse(res, StatusCodes.BadRequest, ErrorMessages.InvalidRquest);

export const errorHandler = (
  error: Error,
  req: Request,
  res: Response,
  next: NextFunction
) =>
  errorResponse(
    res,
    StatusCodes.InternalServerError,
    ErrorMessages.InternalServerError
  );
