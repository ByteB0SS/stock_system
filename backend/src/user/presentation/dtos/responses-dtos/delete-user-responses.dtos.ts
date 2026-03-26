import { } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'
import { IReturnbleUser } from 'src/user/domain/entities/user.entity'

export class DeleteUserSuccessResponseDto {
    @ApiProperty({
        description: "Diz se usuário foi deletado.",
        example: true
    })
    isDeleted!: boolean

    @ApiProperty({
        example: 200,
        description: "Http status ou estado de http, define se usuário foi deletado com sucesso."
    })
    statusCode!: number

    @ApiProperty({
        example: 'Usuário apagado com sucesso.',
        description: "Mensagem explicativa, diz se usuário foi deletado com suecesso."
    })
    message!: string
}