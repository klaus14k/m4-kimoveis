import { Request, Response } from "express";
import { loginService } from "../services/session.service";

export const LoginController = async (req: Request, res: Response): Promise<Response> => {
    const token = await loginService(req.body)

    return res.status(200).json(token)
}