import { Response } from "express";

import { StatusCodes } from "../constants/statusCodes";

export const successResponse = (res: Response, data: any) =>
  res.status(StatusCodes.Success).send({ status: StatusCodes.Success, data });

export const errorResponse = (res: Response, status: number, msg: string) =>
  res.status(status).send({ status, error: msg });
