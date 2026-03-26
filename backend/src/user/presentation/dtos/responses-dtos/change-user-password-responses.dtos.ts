import { } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'
import { IReturnbleUser } from 'src/user/domain/entities/user.entity'

export class ChangeUserPasswordSuccessResponse {
    @ApiProperty({
        description: "Diz se senha foi atualizada com sucesso.",
        example: true
    })
    isChanged!: boolean

    @ApiProperty({
        example: 200,
        description: "Http status ou estado de http, define se entraste na conta com sucesso."
    })
    statusCode!: number

    @ApiProperty({
        example: 'Senha atualizada com sucesso',
        description: "Mensagem explicativa, diz se senha foi atualizada com sucesso."
    })
    message!: string
}