import User from "../entities/User.entity";
import { UserCreate, UserReadReturn, UserReturn } from "../interfaces/users.interface";
import { userRepo } from "../repositories";
import { userReadSchema, userReturnSchema } from "../schemas/user.schema";

export const createUserService = async (data: UserCreate): Promise<UserReturn> => {
    const user: User = userRepo.create(data)

    await userRepo.save(user)

    return userReturnSchema.parse(user)
}

export const readUsersService = async (): Promise<UserReadReturn> => {
    const users: User[] = await userRepo.find()

    return userReadSchema.parse(users)
}

export const updateUserService = async (data: UserCreate, user: User): Promise<UserReturn> => {
    const userUpdated: User = userRepo.create({ ...user, ...data })

    await userRepo.save(userUpdated)

    return userReturnSchema.parse(userUpdated)
}

export const deleteUserService = async (user: User): Promise<void> => {
    await userRepo.softRemove(user)
}