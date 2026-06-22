import { HttpException, HttpStatus } from "@nestjs/common"

export class BarcodeVO {
    private readonly value: string

    public constructor (barcode: string) {
        barcode = barcode.trim()

        if (!barcode) {
            throw new HttpException('Código-de-barra não deve ser vazio', HttpStatus.BAD_REQUEST)
        }

        if (barcode.length > 255) {
            throw new HttpException('Código-de-barra muito extenso, deve ter no máximo 255 caracteres.', HttpStatus.BAD_REQUEST)
        }
        
        this.value =  barcode
    }

    get (): string {
        return this.value
    }
}