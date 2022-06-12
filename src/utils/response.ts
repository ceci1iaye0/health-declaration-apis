import { Response } from "express";

import { StatusCode } from "../constants/status-code";

export const successResponse = (res: Response, data: any) =>
  res.status(StatusCode.Success).send({ status: StatusCode.Success, data });

export const errorResponse = (res: Response, status: number, msg: string) =>
  res.status(status).send({ status, error: msg });
