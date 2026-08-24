import { UseCasePort } from "@shared/application/ports/use-case.port";
import { productRepositoryPort, ProductUniqueSelectors } from "../port/product-repository.port";
import { ProductEntity } from "src/product/domain/entities/product.entity";
import { HttpException, HttpStatus } from "@nestjs/common";

export class GetProductUseCase implements UseCasePort<ProductUniqueSelectors, ProductEntity> {
    constructor (private readonly productRepository: productRepositoryPort) {}

    async execute(input: ProductUniqueSelectors): Promise<ProductEntity> {
        const product = await this.productRepository.findByUnique({barcode: input.barcode, id: input.id, slug: input.slug})

        if (!product) throw new HttpException("Produto não encontrado.", HttpStatus.BAD_REQUEST)

        return product
    }
}