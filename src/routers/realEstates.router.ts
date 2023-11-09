import { Router } from "express";
import { validateBody, verifyAdmin, verifyToken } from "../middlewares/globals.middleware";
import { verifyAddressExists } from "../middlewares/realEstates.middleware";
import { createRealEstateController, readAllRealEstatesController } from "../controllers/realEstates.controller";
import { createRealEstateSchema } from "../schemas/realEstate.schema";

export const realEstatesRouter: Router = Router()

realEstatesRouter.post("/", verifyToken, verifyAdmin, validateBody(createRealEstateSchema), verifyAddressExists, createRealEstateController)
realEstatesRouter.get("/", readAllRealEstatesController)