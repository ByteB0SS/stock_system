import { UseCasePort } from "@shared/application/ports/use-case.port";
import { ProductEntity as output, ProductEntity } from "src/product/domain/entities/product.entity";
import { IProduct } from "src/product/domain/entities/product.entity";
import { productRepositoryPort } from "../port/product-repository.port";
import { QuantityVO } from "src/product/domain/value-objects/quantity.vo";


export class CreateProductUseCase implements UseCasePort<IProduct, ProductEntity> {
	constructor (private readonly ProductRepository: productRepositoryPort) {}

	async execute(input: IProduct): Promise<ProductEntity> {
		const product = await this.ProductRepository.findByUnique({barcode: input.barcode})

		if (!product) {
			const createdProduct = await this.ProductRepository.create(new ProductEntity(input))
			return createdProduct
		}

		const newQuantity =  new QuantityVO(product.getProps().quantity.get())
		newQuantity.add(input.quantity.get())
		// product.getProps().quantity.add(input.quantity.get())
		product.update({quantity: newQuantity})

		const updatedProduct = await this.ProductRepository.update(product)

		return updatedProduct
	}
}
