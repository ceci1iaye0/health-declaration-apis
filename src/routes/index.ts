import { Router } from "express";

function routes() {
  const router = Router();

  router.get("/", function (req, res, next) {
    console.log("Health OK");
    res.sendStatus(200);
  });

  return router;
}

export default routes;
