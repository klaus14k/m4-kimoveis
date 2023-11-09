import { Request, Response } from "express"
import { createCategoryService, readAllCategoriesService, readCategoryByRealEstateService } from "../services/categories.service"

export const createCategoryController = async (req: Request, res: Response): Promise<Response> => {
    const category = await createCategoryService(req.body)

    return res.status(201).json(category)
}

export const readCategoryController = async (req: Request, res: Response): Promise<Response> => {
    const categories = await readAllCategoriesService()

    return res.status(200).json(categories)
}

export const readCategoryByRealEstateController = async (req: Request, res: Response): Promise<Response> => {
    const { id } = req.params
    const realEstates = await readCategoryByRealEstateService(Number(id))

    return res.status(200).json(realEstates)
}