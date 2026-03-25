import { Body, Controller, HttpStatus, Post } from "@nestjs/common";
import { ApiOperation, ApiTags, ApiCreatedResponse } from "@nestjs/swagger";
import { RegisterUserUseCase } from "src/user/application/use-cases/register-user.use-case";
import { RegisterUserDto } from "../dtos/register-user.dto";
import { LoginUserUseCase } from "src/user/application/use-cases/login.use-cases";
import { access } from "fs";
import { RegisterSeccessResponse } from "../dtos/responses-dtos/register-success-response.dto";

@Controller("user")
@ApiTags("Usuário")
export class UserController {
    constructor(private readonly registeUser: RegisterUserUseCase, private readonly login: LoginUserUseCase) { }

    @Post("/auth/register")
    @ApiOperation({ summary: "Criação ou registro de novo usuário na plataforma." })
    @ApiCreatedResponse({
        description: "Conta criada com sucesso",
        type: RegisterSeccessResponse,
        example: {
            accessToken: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI4NDMxZjM3MC00Njg3LTRmYWQtOWQ0MS01YmQ1ZGRlNTY2YjYiLCJyb2xlIjoiTk9STUFMIiwic2x1ZyI6InJ1YmVtLWVybmVzdG8tZmlndWVpcmVkb18xMDRlYzVjOTE3IiwidG9rZW5UeXBlIjoiQUNDRVNTX1RPS0VOIiwiaWF0IjoxNzc0NDUzOTE0LCJleHAiOjE3NzQ0NTQ4MTR9.lFds_OeKbVDmU4aX4yQlxfHEwvvcS-lD45y-cm3oq9g",
            refreshToken: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI4NDMxZjM3MC00Njg3LTRmYWQtOWQ0MS01YmQ1ZGRlNTY2YjYiLCJyb2xlIjoiTk9STUFMIiwic2x1ZyI6InJ1YmVtLWVybmVzdG8tZmlndWVpcmVkb18xMDRlYzVjOTE3IiwidG9rZW5UeXBlIjoiUkVGUkVTSF9UT0tFTiIsImlhdCI6MTc3NDQ1MzkxNCwiZXhwIjoxNzc3MDQ1OTE0fQ.0KcVEzEqHyTKqjPhlfZoivABxVCmHiloCAE76xslmzg",
            user: {
                id: "8431f370-4687-4fad-9d41-5bd5dde566b6",
                name: "Rubem Ernesto Figueiredo",
                email: "rubemernesto_ei1ies2@gmail.com",
                birthdate: "2000-01-01T00:00:00.000Z",
                slug: "rubem-ernesto-figueiredo_104ec5c917",
                status: "ACTIVE",
                role: "NORMAL",
                createdAt: "2026-03-25T15:51:54.722Z",
                updatedAt: "2026-03-25T15:51:54.722Z",
                deletedAt: null
            },
            statusCode: 201,
            message: "Conta criada com sucesso"
        }
    })
    async registerUser(@Body() dto: RegisterUserDto) {
        const user = (await this.registeUser.execute(dto))
        const userProps = user.getProps()
        const tokens = await this.login.execute({ email: userProps.email, password: userProps.password })

        return {
            accessToken: tokens.accessToken,
            refreshToken: tokens.refreshToken,
            user: user.getReturnbleProps(),
            statusCode: HttpStatus.CREATED,
            message: "Conta criada com sucesso"
        }
    }



}