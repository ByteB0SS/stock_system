import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsString, MinLength } from "class-validator";

export class LoginDto {
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
}