import { IdVO } from "@shared/domain/value-objects/id.vo"
import { SlugVO } from "@shared/domain/value-objects/slug.vo"
import { ProductEntity } from "src/product/domain/entities/product.entity"
import { BarcodeVO } from "src/product/domain/value-objects/barcode.vo"
import { NameVO } from "src/product/domain/value-objects/name.vo"

export interface productRepositoryPort {
    findByUnique (selectors: ProductUniqueSelectors): Promise<ProductEntity | null>
    findMany(lastId?: IdVO, limit?: number, slugFilter?: SlugVO, nameFilter?: NameVO): Promise<ProductEntity[]>
    findByUser (userId: IdVO): Promise<ProductEntity[]>
    findByWorkspace (workspaceId: IdVO): Promise<ProductEntity[]>
    create (product: ProductEntity): Promise<ProductEntity>
    update (product: ProductEntity): Promise<ProductEntity>
    delete (productId: IdVO): Promise<boolean>
}

export interface ProductUniqueSelectors {
    id?: IdVO
    barcode?: BarcodeVO
    slug?: SlugVO
}