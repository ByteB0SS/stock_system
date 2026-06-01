import { IdVO } from "@shared/domain/value-objects/id.vo"
import { SlugVO } from "@shared/domain/value-objects/slug.vo"
import { NameVO } from "../value-bojects/name.vo"
import { QuantityVO } from "../value-bojects/quantity.vo"

export type ProductStatus = "ACTIVE" | "DELETED" | "PADDING" | "SUSPENDED"

export interface IProduct {
  readonly id?: IdVO
  readonly barcode: string
  name: NameVO
  purchasedPrice?: number
  price: number
  quantity: QuantityVO
  minQuantity?: number
  slug: SlugVO
  cadasterId: IdVO
  workspaceId: IdVO
  status?: ProductStatus
  unit?: string
  createdAt?: Date
  updatedAt?: Date
  deletedAt?: Date
}

export interface CreateProductInput {
  barcode: string
  name: NameVO
  purchasedPrice?: number
  price: number
  quantity: number
  minQuantity?: number
  cadasterId: IdVO
  workspaceId: IdVO
  status?: ProductStatus
  unit?: string
}

export type UpdateProductuInput = Partial<{
  name: NameVO
  purchasedPrice: number
  price: number
  quantity: QuantityVO
  minQuantity: number
  barcode: string
  unit: string
}>

export class Product {
  private readonly props: IProduct

  private constructor(productProps: IProduct) {
    productProps.slug = SlugVO.createFromText(productProps.name.get())
    this.props = productProps
    Object.freeze(this)
  }

  public static createInstance(props: CreateProductInput) {
    return new Product({
      ...props,
      quantity: new QuantityVO(props.quantity),
      slug: SlugVO.createFromText(props.name.get()),
      status: props.status ?? "ACTIVE",
      // createdAt: new Date(),
      // updatedAt: new Date()
    })
  }

  public setProps(updatePropsInput: UpdateProductuInput) { }

  public addQuantity(quant: number) {
    this.props.quantity.add(quant)
  }

  public decreaseQuantity(quant: number) {
    this.props.quantity.decrease(quant)
  }
}
