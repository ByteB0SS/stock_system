import { } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'
import { IReturnbleUser } from 'src/user/domain/entities/user.entity'

export class RefreshTokenSuccessDto {
    @ApiProperty({
        example: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI4NDMxZjM3MC00Njg3LTRmYWQtOWQ0MS01YmQ1ZGRlNTY2YjYiLCJyb2xlIjoiTk9STUFMIiwic2x1ZyI6InJ1YmVtLWVybmVzdG8tZmlndWVpcmVkb18xMDRlYzVjOTE3IiwidG9rZW5UeXBlIjoiQUNDRVNTX1RPS0VOIiwiaWF0IjoxNzc0NDUzOTE0LCJleHAiOjE3NzQ0NTQ4MTR9.lFds_OeKbVDmU4aX4yQlxfHEwvvcS-lD45y-cm3oq9g',
        description: "Token de acesso, para que o usuario tenha permissões em certos serviços privados da plataforma."
    })
    accessToken!: string

    @ApiProperty({
        example: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI4NDMxZjM3MC00Njg3LTRmYWQtOWQ0MS01YmQ1ZGRlNTY2YjYiLCJyb2xlIjoiTk9STUFMIiwic2x1ZyI6InJ1YmVtLWVybmVzdG8tZmlndWVpcmVkb18xMDRlYzVjOTE3IiwidG9rZW5UeXBlIjoiUkVGUkVTSF9UT0tFTiIsImlhdCI6MTc3NDQ1MzkxNCwiZXhwIjoxNzc3MDQ1OTE0fQ.0KcVEzEqHyTKqjPhlfZoivABxVCmHiloCAE76xslmzg',
        description: "Token de refresh, token que serve para renovação de token de acesso."
    })
    refreshToken!: string

    @ApiProperty({
        example: 200,
        description: "Http status ou estado de http, define se geração de novos tokens foi bem sucedida."
    })
    statusCode!: number

    @ApiProperty({
        example: 'Tokens gerados com sucesso',
        description: "Mensagem explicativa, diz se geração de novos tokens foi bem sucedida."
    })
    message!: string
}