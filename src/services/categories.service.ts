import { Category } from "../entities"
import AppError from "../errors/AppErrors.error"
import { CreateCategory, ReadAllCategories } from "../interfaces/categories.interface"
import { categoryRepo } from "../repositories"

export const createCategoryService = async (data: CreateCategory): Promise<Category> => {
  return await categoryRepo.save(data)
}

export const readAllCategoriesService = async (): Promise<ReadAllCategories> => {
  return await categoryRepo.find()
}

export const readCategoryByRealEstateService = async (id: number): Promise<Category> => {
  const category: Category | null = await categoryRepo.findOne({
    where: {
      id
    },
    relations: {
      realEstate: true
    }
  })

  if (!category) throw new AppError("Category not found", 404)

  return category
}