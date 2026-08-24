import { HttpException, HttpStatus } from "@nestjs/common"

export class BarcodeVO {
    private readonly min = 2
    private readonly max = 255
    private readonly value

    public constructor (barcode: string) {
        if (!this.isValid(barcode)) throw new HttpException ("Código de barra é invalido.", HttpStatus.BAD_REQUEST)
        this.value = barcode
    }

    private isValid(barcde: string): boolean {
        return (barcde.length >= 2 && barcde.length <= 256)
    }

    public get (): string {
        return this.value
    }
}