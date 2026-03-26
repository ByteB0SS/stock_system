import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";


export class RefreshTokenDto {
    @ApiProperty({
        example: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI4NDMxZjM3MC00Njg3LTRmYWQtOWQ0MS01YmQ1ZGRlNTY2YjYiLCJyb2xlIjoiTk9STUFMIiwic2x1ZyI6InJ1YmVtLWVybmVzdG8tZmlndWVpcmVkb18xMDRlYzVjOTE3IiwidG9rZW5UeXBlIjoiUkVGUkVTSF9UT0tFTiIsImlhdCI6MTc3NDQ1MzkxNCwiZXhwIjoxNzc3MDQ1OTE0fQ.0KcVEzEqHyTKqjPhlfZoivABxVCmHiloCAE76xslmzg",
        description: "Refresh token, token para gerar token de acesso e um novo token de refresh válido."
    })
    @IsString({message: "Refresh token inválido"})
    refreshToken!: string
}