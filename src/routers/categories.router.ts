import { Router } from "express";
import { verifyAdmin, verifyToken } from "../middlewares/globals.middleware";
import { verifyCategoryExists, verifyUniqueCategoryName } from "../middlewares/categories.middleware";
import { createCategoryController, readCategoryByRealEstateController, readCategoryController } from "../controllers/categories.controller";

export const categoriesRouter = Router()

categoriesRouter.post("/", verifyToken, verifyUniqueCategoryName, verifyAdmin, createCategoryController)
categoriesRouter.get("/", readCategoryController)
categoriesRouter.get("/:id/realEstate", verifyCategoryExists, readCategoryByRealEstateController)