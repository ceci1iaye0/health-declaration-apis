import { Router } from "express";

import {
  getHealthDeclarations,
  postHealthDeclaration,
} from "../controllers/health-declaration";

const healthDeclarationRouter = Router();

healthDeclarationRouter.post(
  "/health-declaration/submit",
  postHealthDeclaration
);
healthDeclarationRouter.get("/health-declarations", getHealthDeclarations);

export default healthDeclarationRouter;
