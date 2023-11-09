import { Router } from "express";
import { validateBody, verifyAdmin, verifyPermissions, verifyToken } from "../middlewares/globals.middleware";
import { verifyUniqueUserEmail, verifyUserExists } from "../middlewares/users.middleware";
import { createUserController, deleteUserController, readUsersController, updateUserController } from "../controllers/users.controller";
import { createUserSchema, updateUserSchema } from "../schemas/user.schema";

export const usersRouter = Router()

usersRouter.post("/", validateBody(createUserSchema), verifyUniqueUserEmail, createUserController)
usersRouter.get("/", verifyToken, verifyAdmin, readUsersController)
usersRouter.patch("/:id", validateBody(updateUserSchema), verifyToken, verifyUserExists, verifyPermissions, updateUserController)
usersRouter.delete("/:id", verifyToken, verifyPermissions, verifyUserExists, deleteUserController)