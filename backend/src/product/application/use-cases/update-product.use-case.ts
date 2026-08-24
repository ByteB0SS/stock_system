import { UseCasePort } from "@shared/application/ports/use-case.port";
import { ProductEntity } from "src/product/domain/entities/product.entity";
import { IProduct  } from "src/product/domain/entities/product.entity";
import { productRepositoryPort } from "../port/product-repository.port";
import { QuantityVO } from "src/product/domain/value-objects/quantity.vo";
import { HttpException, HttpStatus } from "@nestjs/common";


export class updatedProduct implements UseCasePort<IProduct, ProductEntity> {
    constructor (private readonly ProductRepository: productRepositoryPort) {}

    async execute(input: IProduct): Promise<ProductEntity> {
        const product = await this.ProductRepository.findByUnique({id: input.id})

        if (!product || product.getProps().status === "DELETED") throw new HttpException("Produto não encontrado.", HttpStatus.BAD_REQUEST)

        const newQuantity =  new QuantityVO(product.getProps().quantity.get())
        newQuantity.add(input.quantity.get())
        // product.getProps().quantity.add(input.quantity.get())
        product.update(input)

        const updatedProduct = await this.ProductRepository.update(product)

        return updatedProduct
    }
}
