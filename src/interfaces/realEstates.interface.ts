import { z } from "zod"
import { createRealEstateSchema } from "../schemas/realEstate.schema"
import RealEstate from "../entities/RealEstate.entity"
import { Repository } from "typeorm"
import Address from "../entities/Address.entity"

export type CreateRealEstate = z.infer<typeof createRealEstateSchema>
export type RealEstateRepo = Repository<RealEstate>
export type AddressRepo = Repository<Address>