import cors from "cors";
import express from "express";

import healthRouter from "./routes";
import healthDeclarationRouter from "./routes/healthDeclarationRoutes";
import connectDB from "./utils/database";
import * as errorHandler from "./utils/errorHandler";

const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.json());

app.use(cors());

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
