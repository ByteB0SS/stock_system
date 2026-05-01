import { IdVO } from "@shared/domain/value-objects/id.vo"
import { SlugVO } from "@shared/domain/value-objects/slug.vo"
import { NameVO } from "../value-bojects/name.vo"

export type ProductStatus = "ACTIVE" | "DELETED" | "PADDING" | "SUSPENDED"

export interface IProduct {
  readonly id?: IdVO
  readonly barcode: string
  name: NameVO
  purchasedPrice?: number
  price: number
  quantity: number
  minQuantity?: number
  slug?: SlugVO
  cadasterId: IdVO
  workspaceId: IdVO
  status?: ProductStatus
  unit?: string
  createdAt?: Date
  updatedAt?: Date
  deletedAt?: Date
}

  export type UpdateProductuInput = Partial<{
    name: string,
    purchasedPrice: number,
    price: number,
    quantity: number,
    minQuantity: number,
    barcode: string,
    unit: string,
  }>

export class Product {
  private readonly props: IProduct

  constructor(productProps: IProduct) {
    productProps.slug = SlugVO.createFromText(productProps.name.get())
    this.props = productProps
    Object.freeze(this)
  }

  // setters
  public setProps (updatePropsInput: UpdateProductuInput) {
    
  }

  public addQuantity (quant: number) {
    this.props.quantity += quant
  }

  public decreaseQuantity  (quant: number) {
    this.props.quantity -= quant
  }
}
