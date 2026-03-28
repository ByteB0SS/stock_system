import { ApiProperty } from "@nestjs/swagger"

export class updateUserPasswordDto {
    newPassword!: string
    oldPassword!: string
}

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