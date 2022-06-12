import express from "express";

import healthRouter from "./src/routes";
import healthDeclarationRouter from "./src/routes/health-declaration-routes";
import connectDB from "./src/utils/database";
import * as errorHandler from "./src/utils/error-handler";

const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.json());

/**
 * Routers
 */
app.use(healthRouter);
app.use(healthDeclarationRouter);

/**
 * Connect to database
 */
connectDB;

/**
 * Error handlers
 */
app.use(errorHandler.notFoundHandler);
app.use(errorHandler.validationErrorHandler);
app.use(errorHandler.errorHandler);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
