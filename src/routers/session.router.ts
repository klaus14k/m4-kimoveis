import { Router } from "express";
import { LoginController } from "../controllers/session.controller";

export const sessionRouter: Router = Router()

sessionRouter.post("/", LoginController)