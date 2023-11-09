import { Router } from "express";
import { validateBody, verifyAdmin, verifyToken } from "../middlewares/globals.middleware";
import { verifyRealEstateExists, verifyRealEstateScheduleExists, verifyUserScheduleExists } from "../middlewares/schedules.middleware";
import { createScheduleController, readAllSchedulesRealEstateController } from "../controllers/schedules.controller";
import { createScheduleSchema } from "../schemas/schedule.schema";

export const schedulesRouter: Router = Router()

schedulesRouter.post("/", verifyToken, validateBody(createScheduleSchema), verifyRealEstateExists, verifyRealEstateScheduleExists, verifyUserScheduleExists, createScheduleController)
schedulesRouter.get("/realEstate/:id", verifyToken, verifyAdmin, readAllSchedulesRealEstateController)