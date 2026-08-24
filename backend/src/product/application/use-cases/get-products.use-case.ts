import { Inject, Injectable } from "@nestjs/common"
import { UseCasePort } from "@shared/application/ports/use-case.port"
import { User } from "src/user/domain/entities/user.entity"
import { ProductEntity } from "src/product/domain/entities/product.entity"
import { productRepositoryPort } from "../port/product-repository.port"
import { IdVO } from "@shared/domain/value-objects/id.vo"
import { SlugVO } from "@shared/domain/value-objects/slug.vo"
import { NameVO } from "src/product/domain/value-objects/name.vo"

export interface GetProductsUseCaseInput {
  lastId?: IdVO
  limit?: number
  slugFilter?: SlugVO
  nameFilter?: NameVO
}

@Injectable()
export class GetProductsUseCase implements UseCasePort<GetProductsUseCaseInput, ProductEntity[]> {
  constructor(private readonly productRepository: productRepositoryPort) {}

  async execute(input: GetProductsUseCaseInput): Promise<ProductEntity[]> {
    const { lastId, limit, nameFilter, slugFilter } = input
    const products = await this.productRepository.findMany(lastId, limit, slugFilter, nameFilter)
    return products
  }
}
