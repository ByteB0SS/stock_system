import { IdVO } from "@shared/domain/value-objects/id.vo"
import { SlugVO } from "@shared/domain/value-objects/slug.vo"
import { NameVO } from "../value-bojects/name.vo"
import { QuantityVO } from "../value-bojects/quantity.vo"
import { BarcodeVO } from "../value-bojects/barcode.vo"
import { PreciseNumberVO } from "@shared/domain/value-objects/precise-number.vo"

export type ProductStatus = "ACTIVE" | "DELETED" | "PADDING" | "SUSPENDED"

export interface IProduct {
  readonly id?: IdVO
  readonly barcode: BarcodeVO
  name: NameVO
  purchasedPrice?: PreciseNumberVO
  price: PreciseNumberVO
  quantity: QuantityVO
  minQuantity?: QuantityVO
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
  barcode: BarcodeVO
  name: NameVO
  purchasedPrice?: PreciseNumberVO
  price: PreciseNumberVO 
  quantity: QuantityVO
  minQuantity?: QuantityVO
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
    this.props = productProps
    Object.freeze(this)
  }

  public static createInstance(props: CreateProductInput) {
    return new Product({
      ...props,
      slug: SlugVO.createFromText(props.name.get()),
      status: props.status ?? "ACTIVE",
      // createdAt: new Date(),
      // updatedAt: new Date()
    })
  }

  public static restore (props: IProduct) {
    return new Product(props)
  }

  public addQuantity(quant: number) {
    this.props.quantity.add(quant)
  }

  public decreaseQuantity(quant: number) {
    this.props.quantity.decrease(quant)
  }

  setName (name: NameVO) {
    this.props.name = name
    this.props.slug = SlugVO.createFromText(name.get())
  }

  setPrice (price: PreciseNumberVO) {
    this.props.price = price
  }

  setPurchasedPrice (purchasedPrice: PreciseNumberVO) {
    this.props.purchasedPrice = purchasedPrice
  }

  setMinQuantity (minQuantity: QuantityVO) {
    this.props.minQuantity = minQuantity
  }

  setUnit (unit: string) {
    this.props.unit = unit
  }

  getProps (): IProduct {
    return this.props
  }
}
