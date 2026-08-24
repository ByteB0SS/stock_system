import { IdVO } from "@shared/domain/value-objects/id.vo";
import { PrismaService } from "src/config/prisma/prisma.service";
import { productRepositoryPort, ProductUniqueSelectors } from "src/product/application/port/product-repository.port";
import { ProductEntity } from "src/product/domain/entities/product.entity";
import { Product as PrismaProduct } from "@prisma/client";
import { BarcodeVO } from "src/product/domain/value-objects/barcode.vo";
import { NameVO } from "src/product/domain/value-objects/name.vo";
import { PreciseNumberVO } from "@shared/domain/value-objects/precise-number.vo";
import { QuantityVO } from "src/product/domain/value-objects/quantity.vo";
import { SlugVO } from "@shared/domain/value-objects/slug.vo";

export class ProductRepositoryPrismaAdpater implements productRepositoryPort {
    constructor(private readonly prisma: PrismaService) { }

    public async findMany(lastId?: IdVO, limit?: number, slugFilter?: SlugVO, nameFilter?: NameVO): Promise<ProductEntity[]> {
        const whereConfig = {
            ...(slugFilter?.get() && {
                slug: { contains: slugFilter.get(), mode: "insensitive" as const },
            }),
            ...(nameFilter?.get() && {
                name: { contains: nameFilter.get(), mode: "insensitive" as const },
            }),
        }

        let validCursor: { id: string } | undefined = undefined
        if (lastId) {
            const cursorExists = await this.prisma.product.findFirst({
                where: {
                    id: lastId.get(),
                    ...whereConfig,
                },
                select: { id: true },
            })

            if (cursorExists) {
                validCursor = { id: lastId.get()}
            }
        }
        const products = await this.prisma.product.findMany({
            where: whereConfig,
            take: limit || 10,
            ...(validCursor && {
                skip: 1,
                cursor: validCursor,
            }),
            orderBy: { createdAt: "asc" },
        })

        return products.map((workspace) => this.restoreProduct(workspace))
    }

    public async findByWorkspace(workspaceId: IdVO): Promise<ProductEntity[]> {
        return (await this.prisma.product.findMany({where: {workspaceId: workspaceId.get()}})).map((product) => this.restoreProduct(product))
    }

    public async findByUser(userId: IdVO): Promise<ProductEntity[]> {
        return (await this.prisma.product.findMany({where: {cadasterId: userId.get()}})).map((product) => this.restoreProduct(product))
    }

    public async findByUnique(selectors: ProductUniqueSelectors): Promise<ProductEntity | null> {
        const product = await this.prisma.product.findFirst({where: {OR: [{id: selectors.id.get()}, {barcode: selectors.barcode.get()}, {slug: selectors.barcode.get()}]}})
        
        return product ? this.restoreProduct(product) : null
    }

    public async update(product: ProductEntity): Promise<ProductEntity> {
        const props = product.getProps()
        const updatedProduct = await this.prisma.product.update({
            where: {
                id: props.id.get()
            },
            data: {
                barcode: props.barcode.get(),
                name: props.name.get(),
                price: props.price.get(),
                quantity: props.quantity.get(),
                slug: props.slug.get(),
                cadasterId: props.cadasterId.get(),
                workspaceId: props.workspaceId.get(),
                id: props.id.get(),
                minQuantity: props.minQuantity.get(),
                purchasedPrice: props.purchasedPrice.get(),
                status: props.status,
                unit: props.unit,
                createdAt: props.createdAt,
                deletedAt: props.deletedAt,
                updatedAt: props.updatedAt
            }
        })
        return this.restoreProduct(updatedProduct)
    }

    public async create(product: ProductEntity): Promise<ProductEntity> {
        const props = product.getProps()
        const createdProduct = await this.prisma.product.create({
            data: {
                barcode: props.barcode.get(),
                name: props.name.get(),
                price: props.price.get(),
                quantity: props.quantity.get(),
                slug: props.slug.get(),
                cadasterId: props.cadasterId.get(),
                workspaceId: props.workspaceId.get(),
                id: props.id.get(),
                minQuantity: props.minQuantity.get(),
                purchasedPrice: props.purchasedPrice.get(),
                status: props.status,
                unit: props.unit,
                createdAt: props.createdAt,
                deletedAt: props.deletedAt,
                updatedAt: props.updatedAt
            }
        })
        return this.restoreProduct(createdProduct)
    }

    public async delete(productId: IdVO): Promise<boolean> {
        await this.prisma.product.update({where: {id: productId.get()}, data: {status: "DELETED"}})
        return true
    }

    private restoreProduct(product: PrismaProduct): ProductEntity {
        return new ProductEntity({
        id: new IdVO(product.id),
        barcode: new BarcodeVO(product.barcode),
        name: new NameVO(product.name),
        purchasedPrice: new PreciseNumberVO(product.purchasedPrice?.toNumber() ?? 0),
        price: new PreciseNumberVO(product.price?.toNumber()),
        quantity: new QuantityVO(product.quantity),
        minQuantity: new QuantityVO(product.minQuantity ?? 0),
        slug: SlugVO.restore(product.slug),
        cadasterId: new IdVO(product.cadasterId),
        workspaceId: new IdVO(product.workspaceId),
        status: product.status,
        unit: product.unit ?? "",
        createdAt: product.createdAt,
        updatedAt: product.updatedAt,
        deletedAt: product.deletedAt,
    })
    }
}
