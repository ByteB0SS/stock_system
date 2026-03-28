import  { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsString, IsNotEmpty, MinLength, IsDateString, } from "class-validator";
import { IReturnbleUser } from 'src/user/domain/entities/user.entity'

export class RegisterUserDto {
    @ApiProperty({ 
        example: "Rubem Ernesto Figueiredo", 
        description: "Nome completo do utilizador." 
    })
    @IsString()
    @IsNotEmpty()
    name!: string;

    @ApiProperty({ 
        example: "rubemernesto_ei1ies@gmail.com", 
        description: "Endereço de email único para autenticação." 
    })
    @IsEmail({}, { message: "O formato do email é inválido." })
    email!: string;

    @ApiProperty({ 
        example: "Senha$_Dificil$_2026$", 
        description: "Senha: min 8 chars, 1 maiúsculo, 1 minúsculo e 1 especial.",
        minLength: 8, // O Swagger/Scalar destaca isto visualmente,
        format: "password"
    })
    @IsString()
    @MinLength(8, { message: "A password deve ter pelo menos 8 caracteres." })
    
    password!: string;

    @ApiProperty({ 
        example: "2000-01-01", 
        description: "Data de nascimento no formato ISO (YYYY-MM-DD)." 
    })
    @IsDateString({}, { message: "A data de nascimento deve estar no formato YYYY-MM-DD." })
    birthdate!: string;
}

// responses

// 201 - success
export class RegisterSuccessResponse {
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
        description: "Objecto com informações do usuário criado."
    })
    user!: IReturnbleUser

    @ApiProperty({
        example: 201,
        description: "Http status ou estado de http, define se o user foi criado com sucesso."
    })
    statusCode!: number

    @ApiProperty({
        example: 'Conta criada com sucesso',
        description: "Mensagem explicativa, diz se a conta foi criada."
    })
    message!: string
}

// 409 - conflict
export class RegisterUserConflictResponseDto {
  @ApiProperty({ 
    description: 'Mensagem detalhada do conflito.',
    example: 'O e-mail informado já está a ser utilizado por outra conta.' 
  })
  message: string;

  @ApiProperty({ 
    description: 'Código de status HTTP.',
    example: 409 
  })
  statusCode: number;
}