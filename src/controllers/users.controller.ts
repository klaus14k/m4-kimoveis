import { Request, Response } from "express";
import { UserReturn } from "../interfaces/users.interface";
import { createUserService, deleteUserService, readUsersService, updateUserService } from "../services/users.service";

export const createUserController = async (req: Request, res: Response): Promise<Response> => {
    const user: UserReturn = await createUserService(req.body)

    return res.status(201).json(user)
}

export const readUsersController = async (req: Request, res: Response): Promise<Response> => {
    const users = await readUsersService()

    return res.status(200).json(users)
}

export const updateUserController = async (req: Request, res: Response): Promise<Response> => {
    const { user } = res.locals

    const updatedUser = await updateUserService(req.body, user)

    return res.status(200).json(updatedUser)
}

export const deleteUserController = async (req: Request, res: Response): Promise<Response> => {
    const { user } = res.locals

    await deleteUserService(user)

    return res.status(204).json()
}