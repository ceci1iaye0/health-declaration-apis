import express from "express";

import indexRouter from "./src/routes";

const server = express();

server.use("/health", indexRouter());

export default server;
