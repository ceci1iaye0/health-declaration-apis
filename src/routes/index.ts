import { Router } from "express";

const healthRouter = Router();

healthRouter.get("/", function (req, res, next) {
  console.log("Health OK");
  res.sendStatus(200);
});

export default healthRouter;
