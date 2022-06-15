import { Router } from "express";

import { HealthDeclarationRoutes } from "../constants/routes";
import {
  getHealthDeclarations,
  postHealthDeclaration,
} from "../controllers/healthDeclarationController";

const healthDeclarationRouter = Router();

healthDeclarationRouter.post(
  HealthDeclarationRoutes.Create,
  postHealthDeclaration
);
healthDeclarationRouter.get(
  HealthDeclarationRoutes.GetAll,
  getHealthDeclarations
);

export default healthDeclarationRouter;
