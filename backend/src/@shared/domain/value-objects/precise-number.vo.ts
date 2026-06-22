export class PreciseNumberVO {
    private value: number
    private readonly scaleFactor: number

    public constructor(value: number, scale: number = 2) {
        if (scale < 0) {
            throw new Error("Invalid scale from PreciseNumber...")
        }

        this.scaleFactor = 10 ** scale

        this.value = this.convertToTinyUnit(value)
    }

    public get(): number {
        return this.value
    }

    private convertToTinyUnit(quantity: number): number {
        quantity = quantity < 0 ? -quantity : quantity
        const scaled = quantity * this.scaleFactor
        
        if (!Number.isInteger(scaled)) {
            throw new Error(
                `Value cannot have more than ${Math.log10(this.scaleFactor)} decimal places`
            )
        }

        return scaled
    }

    public getNormal(): number {
        return this.value / this.scaleFactor
    }

    public add(quantity: number): number {
        quantity = quantity < 0 ? -quantity : quantity
        quantity = this.convertToTinyUnit(quantity)

        this.value += quantity

        return this.value
    }

    public subtract(quantity: number): number {
        quantity = quantity < 0 ? -quantity : quantity
        quantity = quantity * this.scaleFactor

        this.value -= quantity

        return this.value
    }

    public tinyUnitMultiply(multiplier: number): number {
        multiplier = multiplier * this.scaleFactor

        this.value *= multiplier

        return this.value
    }

    public tinyUnitDivide(divider: number): number {
        divider = divider * this.scaleFactor

        this.value /= divider

        return this.value
    }

    public multiply(multiplier: number): number {
        this.value *= multiplier

        return this.value
    }

    public divide(divider: number): number {
        this.value /= divider

        return this.value
    }
}