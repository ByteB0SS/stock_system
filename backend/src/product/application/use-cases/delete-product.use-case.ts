import { UseCasePort } from "@shared/application/ports/use-case.port";
import { productRepositoryPort } from "../port/product-repository.port";
import { IdVO } from "@shared/domain/value-objects/id.vo";
import { HttpException, HttpStatus } from "@nestjs/common";

export class DeleteProductUseCase implements UseCasePort<IdVO, boolean> {
    constructor (private readonly productRepository: productRepositoryPort) {}    

    async execute(input: IdVO): Promise<boolean> {
        const product = await this.productRepository.findByUnique({id: input})
        if (!product || product.getProps().status === "DELETED") throw new HttpException("Produto não encontrado", HttpStatus.BAD_REQUEST)
        return await this.productRepository.delete(input)
    }
}