import { EntityBase } from "@shared/domain/entity.base"
import { IdVO } from "@shared/domain/value-objects/id.vo"
import { PreciseNumberVO } from "@shared/domain/value-objects/precise-number.vo"
import { SlugVO } from "@shared/domain/value-objects/slug.vo"
import { BarcodeVO } from "../value-objects/barcode.vo"
import { NameVO } from "../value-objects/name.vo"
import { QuantityVO } from "../value-objects/quantity.vo"


export type ProductStatus = "ACTIVE" | "DELETED" | "PADDING" | "SUSPENDED"

export interface IProduct {
    id: IdVO
    barcode: BarcodeVO
    name: NameVO
    purchasedPrice: PreciseNumberVO
    price: PreciseNumberVO
    quantity: QuantityVO
    minQuantity: QuantityVO
    slug: SlugVO
    cadasterId: IdVO
    workspaceId: IdVO
    status: ProductStatus
    unit: string
    createdAt: Date
    updatedAt: Date | null
    deletedAt: Date | null
}

export type UpdateProductInput = Partial<Omit<IProduct, "id" | "cadasterId" | "workspaceId" | "slug">>

export class ProductEntity extends EntityBase{
    private readonly id: IdVO
    private readonly barcode: BarcodeVO
    private readonly cadasterId: IdVO
    private readonly workspaceId: IdVO
    private name: NameVO
    private slug: SlugVO
    private price: PreciseNumberVO
    private purchasedPrice: PreciseNumberVO
    private quantity: QuantityVO
    private minQuantity: QuantityVO
    private status: ProductStatus
    private unit: string

    public constructor (propeties: IProduct) {
        super (propeties.createdAt, propeties.updatedAt , propeties.deletedAt) 
        this.id = propeties.id 
        this.barcode = propeties.barcode
        this.cadasterId = propeties.cadasterId
        this.slug = propeties.slug
        this.workspaceId = propeties.workspaceId
        this.name = propeties.name
        this.purchasedPrice = propeties.purchasedPrice
        this.price = propeties.price
        this.quantity = propeties.quantity
        this.minQuantity = propeties.minQuantity
        this.status = propeties.status
        this.unit = propeties.unit
    }

    public update (propeties: UpdateProductInput): void {
        this.slug = propeties.name ? SlugVO.createFromText(propeties.name.get()) : this.slug
        this.name = propeties.name ?? this.name
        this.purchasedPrice = propeties.purchasedPrice ?? this.purchasedPrice
        this.price = propeties.price ?? this.price
        this.quantity = propeties.quantity ?? this.quantity
        this.minQuantity = propeties.minQuantity ?? this.minQuantity
        this.status = propeties.status ?? this.status
        this.unit = propeties.unit ?? this.unit
        this.touch()
    }

    public getProps(): IProduct {
        return {
            id: this.id,
            barcode: this.barcode,
            name: this.name,
            purchasedPrice: this.purchasedPrice,
            price: this.price,
            quantity: this.quantity,
            minQuantity: this.minQuantity,
            slug: this.slug,
            cadasterId: this.cadasterId,
            workspaceId: this.workspaceId,
            status: this.status,
            unit: this.unit,
            createdAt: this.createdAt,
            updatedAt: this.updatedAt,
            deletedAt: this.deletedAt
        }
    }
}