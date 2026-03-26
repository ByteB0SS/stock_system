import { ApiProperty } from "@nestjs/swagger";
import { IsString, MinLength } from "class-validator";

export class changeUserPassowrdDto {
        @ApiProperty({ 
            example: "Nova$_Senha$_Dificil$_2026$", 
            description: "Senha: min 8 chars, 1 maiúsculo, 1 minúsculo e 1 especial.",
            minLength: 8, 
            format: "password"
        })
        @IsString()
        @MinLength(8, { message: "A password deve ter pelo menos 8 caracteres." })
        newPassword!: string;

        @ApiProperty({
            example: "Senha$_Dificil$_2026$",
            description: "Senha antiga."
        })
        @IsString() 
        oldPassword!: string
}