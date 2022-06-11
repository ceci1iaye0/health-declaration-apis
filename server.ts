import express from "express";

import healthRouter from "./src/routes";
import healthDeclarationRouter from "./src/routes/health-declaration-routes";
import * as ErrorHandler from "./src/utils/error-handling";

const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.json());

/**
 * Routers
 */
app.use(healthRouter);
app.use(healthDeclarationRouter);

/**
 * Error handlers
 */
app.use(ErrorHandler.invalidPathHandler);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
