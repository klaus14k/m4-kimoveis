import "reflect-metadata";
import "express-async-errors";
import express from "express";
import { routes } from "./routers/index.router";
import { handleErrors } from "./middlewares/handleErrors.middleware";

export const app = express();
app.use(express.json());

app.use("/", routes)

app.use(handleErrors)

export default app;
