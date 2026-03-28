import { ApiProperty, OmitType, PartialType } from "@nestjs/swagger";
import { RegisterUserDto } from "./register-user.dtos";
import { IReturnbleUser } from 'src/user/domain/entities/user.entity'

export class updateUserDto extends OmitType(RegisterUserDto, ['password'] as const) {

}

// responses

//200 - success 
export class UpdateUserSuccessResponseDto {
    @ApiProperty({
        example: {
            id: "8431f370-4687-4fad-9d41-5bd5dde566b6",
            name: "Rubem Ernesto Figueiredo",
            email: "rubemernesto_ei1ies@gmail.com",
            birthdate: "2000-01-01T00:00:00.000Z",
            slug: "rubem-ernesto-figueiredo_104ec5c917",
            status: "ACTIVE",
            role: "NORMAL",
            createdAt: "2026-03-25T15:51:54.722Z",
            updatedAt: "2026-03-25T15:51:54.722Z",
            deletedAt: null
        },
        description: "Objecto com informações do usuário actualizado."
    })
    user!: IReturnbleUser

    @ApiProperty({
        example: 201,
        description: "Http status ou estado de http, define se o usuário foi actualizado com sucesso."
    })
    statusCode!: number

    @ApiProperty({
        example: 'Dados de usuário actualizados com success.',
        description: "Mensagem explicativa, diz se a conta foi actualizada."
    })
    message!: string
}