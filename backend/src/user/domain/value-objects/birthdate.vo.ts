import { HttpException } from "@nestjs/common"

export class BirthdateVO {
    private readonly value: Date

    constructor(date: Date | string) {
        const convertedDate = new Date(date)

        if (isNaN(convertedDate.getTime())) {
            throw new HttpException('Data de nascimento inválida', 400)
        }

        if (!this.isOver18(convertedDate)) {
            throw new HttpException('O usuário deve ser maior de 18 anos', 400)
        }

        this.value = convertedDate
    }



    isOver18(birthdate: Date): boolean {
        const today = new Date();
        let age = today.getFullYear() - birthdate.getFullYear();
        const monthDiff = today.getMonth() - birthdate.getMonth();

        if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthdate.getDate())) {
            age--;
        }

        return age >= 18;
    }

    get () {
        return this.value
    }
}