import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Post, Put } from "@nestjs/common";
import { ApiOperation, ApiTags, ApiCreatedResponse, ApiOkResponse, ApiProperty, ApiParam } from "@nestjs/swagger";
import { RegisterUserUseCase } from "src/user/application/use-cases/register-user.use-case";
import { RegisterUserDto } from "../dtos/register-user.dto";
import { LoginUserUseCase } from "src/user/application/use-cases/login.use-cases";
import { RegisterSuccessResponse } from "../dtos/responses-dtos/register-success-response.dto";
import { LoginDto } from "../dtos/login.dto";
import { LoginSuccessResponse } from "../dtos/responses-dtos/login-success-response.dtos";
import { RefreshTokenUsecase } from "src/user/application/use-cases/refresh-token.use-case";
import { RefreshTokenDto } from "../dtos/refresh-token.dto";
import { RefreshTokenSuccessDto } from "../dtos/responses-dtos/refresh-token-success-response.dto";
import { UpdateUserUseCase } from "src/user/application/use-cases/update-user.use-case";
import { updateUserDto } from "../dtos/update-user.dto";
import { BirthdateVO } from "src/user/domain/value-objects/birthdate.vo";
import { EmailVO } from "src/user/domain/value-objects/email.vo";
import { NameVO } from "src/user/domain/value-objects/name.vo";
import { IdVO } from "src/user/domain/value-objects/id.vo";
import { DeleteUserUseCase } from "src/user/application/use-cases/delete-user.use-case";
import { changeUserPassowrdDto } from "../dtos/change-user-password.dto";
import { UpdateUserPasswordUseCase } from "src/user/application/use-cases/update-user-password.use-case";
import { ChangeUserPasswordSuccessResponse } from "../dtos/responses-dtos/change-user-password-responses.dtos";
import { DeleteUserSuccessResponseDto } from "../dtos/responses-dtos/delete-user-responses.dtos";

@Controller("user")
@ApiTags("Usuário")
export class UserController {
    constructor(
        private readonly userRegister: RegisterUserUseCase,
        private readonly login: LoginUserUseCase,
        private readonly tokenRefresher: RefreshTokenUsecase,
        private readonly userUpdater: UpdateUserUseCase,
        private readonly userDeleter: DeleteUserUseCase,
        private readonly userPasswordUpdater: UpdateUserPasswordUseCase,
    ) { }

    @Post("/auth/register")
    @ApiOperation({ summary: "Cadastrar usuário." })
    @ApiCreatedResponse({
        description: "Conta criada com sucesso",
        type: RegisterSuccessResponse,
        example: {
            accessToken: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI4NDMxZjM3MC00Njg3LTRmYWQtOWQ0MS01YmQ1ZGRlNTY2YjYiLCJyb2xlIjoiTk9STUFMIiwic2x1ZyI6InJ1YmVtLWVybmVzdG8tZmlndWVpcmVkb18xMDRlYzVjOTE3IiwidG9rZW5UeXBlIjoiQUNDRVNTX1RPS0VOIiwiaWF0IjoxNzc0NDUzOTE0LCJleHAiOjE3NzQ0NTQ4MTR9.lFds_OeKbVDmU4aX4yQlxfHEwvvcS-lD45y-cm3oq9g",
            refreshToken: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI4NDMxZjM3MC00Njg3LTRmYWQtOWQ0MS01YmQ1ZGRlNTY2YjYiLCJyb2xlIjoiTk9STUFMIiwic2x1ZyI6InJ1YmVtLWVybmVzdG8tZmlndWVpcmVkb18xMDRlYzVjOTE3IiwidG9rZW5UeXBlIjoiUkVGUkVTSF9UT0tFTiIsImlhdCI6MTc3NDQ1MzkxNCwiZXhwIjoxNzc3MDQ1OTE0fQ.0KcVEzEqHyTKqjPhlfZoivABxVCmHiloCAE76xslmzg",
            user: {
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
            statusCode: 201,
            message: "Conta criada com sucesso"
        }
    })
    async registerUser(@Body() dto: RegisterUserDto) {
        const user = (await this.userRegister.execute(dto))
        const userProps = user.getProps()
        const tokens = await this.login.execute({ email: userProps.email, password: userProps.password }, false)

        return {
            accessToken: tokens.accessToken,
            refreshToken: tokens.refreshToken,
            user: user.getReturnbleProps(),
            statusCode: HttpStatus.CREATED,
            message: "Conta criada com sucesso"
        }
    }

    @Post('/auth/login')
    @HttpCode(200)
    @ApiOperation({ summary: "Fazer login." })
    @ApiOkResponse({
        description: "Entraste na sua conta com sucesso",
        type: LoginSuccessResponse,
        example: {
            accessToken: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI4NDMxZjM3MC00Njg3LTRmYWQtOWQ0MS01YmQ1ZGRlNTY2YjYiLCJyb2xlIjoiTk9STUFMIiwic2x1ZyI6InJ1YmVtLWVybmVzdG8tZmlndWVpcmVkb18xMDRlYzVjOTE3IiwidG9rZW5UeXBlIjoiQUNDRVNTX1RPS0VOIiwiaWF0IjoxNzc0NDUzOTE0LCJleHAiOjE3NzQ0NTQ4MTR9.lFds_OeKbVDmU4aX4yQlxfHEwvvcS-lD45y-cm3oq9g",
            refreshToken: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI4NDMxZjM3MC00Njg3LTRmYWQtOWQ0MS01YmQ1ZGRlNTY2YjYiLCJyb2xlIjoiTk9STUFMIiwic2x1ZyI6InJ1YmVtLWVybmVzdG8tZmlndWVpcmVkb18xMDRlYzVjOTE3IiwidG9rZW5UeXBlIjoiUkVGUkVTSF9UT0tFTiIsImlhdCI6MTc3NDQ1MzkxNCwiZXhwIjoxNzc3MDQ1OTE0fQ.0KcVEzEqHyTKqjPhlfZoivABxVCmHiloCAE76xslmzg",
            user: {
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
            statusCode: 200,
            message: "Entraste na sua conta com sucesso"
        }
    })
    async loginUser(@Body() dto: LoginDto) {
        const response = await this.login.execute(dto)

        if (!response.user) {
            throw new Error("User not found.")
        }

        const user = response.user.getReturnbleProps()

        return {
            user: user,
            accessToken: response.accessToken,
            refreshToken: response.refreshToken,
            statusCode: HttpStatus.OK,
            message: "Entraste na sua conta com sucesso"
        }
    }

    @Post('/auth/refresh-token')
    @HttpCode(200)
    @ApiOperation({ summary: "Recuperar tokens" })
    @ApiOkResponse({
        description: "Recuperação de token válido foi bem sucedida.",
        type: RefreshTokenSuccessDto,
        example: {
            accessToken: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI4NDMxZjM3MC00Njg3LTRmYWQtOWQ0MS01YmQ1ZGRlNTY2YjYiLCJyb2xlIjoiTk9STUFMIiwic2x1ZyI6InJ1YmVtLWVybmVzdG8tZmlndWVpcmVkb18xMDRlYzVjOTE3IiwidG9rZW5UeXBlIjoiQUNDRVNTX1RPS0VOIiwiaWF0IjoxNzc0NDUzOTE0LCJleHAiOjE3NzQ0NTQ4MTR9.lFds_OeKbVDmU4aX4yQlxfHEwvvcS-lD45y-cm3oq9g",
            refreshToken: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI4NDMxZjM3MC00Njg3LTRmYWQtOWQ0MS01YmQ1ZGRlNTY2YjYiLCJyb2xlIjoiTk9STUFMIiwic2x1ZyI6InJ1YmVtLWVybmVzdG8tZmlndWVpcmVkb18xMDRlYzVjOTE3IiwidG9rZW5UeXBlIjoiUkVGUkVTSF9UT0tFTiIsImlhdCI6MTc3NDQ1MzkxNCwiZXhwIjoxNzc3MDQ1OTE0fQ.0KcVEzEqHyTKqjPhlfZoivABxVCmHiloCAE76xslmzg",
            statusCode: 200,
            message: "Tokens gerado com sucesso"
        }
    })
    async refreshToken(@Body() dto: RefreshTokenDto) {
        const tokens = await this.tokenRefresher.execute(dto)
        return {
            ...tokens,
            statusCode: HttpStatus.OK,
            message: "Tokens gerado com sucesso"
        }
    }


    @Put('/update/:id')
    @ApiOperation({ summary: "Actualizar dados do usuário." })
    @ApiParam({
        name: 'id',
        description: 'O UUID do usuário que será atualizado',
        example: 'f846cf11-f55b-4be4-9062-bf9f7f213d29'
    })
    @ApiOkResponse({
        description: "Actualização dos dados do usuário bem sucedida.",
        type: RefreshTokenSuccessDto,
        example: {
            user: {
                id: "f846cf11-f55b-4be4-9062-bf9f7f213d29",
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
            statusCode: HttpStatus.OK,
            message: "Informações de usuário actualizadoas com sucesso"
        }
    })
    async update(@Body() dto: updateUserDto, @Param('id') id: string) {
        const user = await this.userUpdater.execute({
            data: {
                birthdate: new BirthdateVO(dto.birthdate),
                email: new EmailVO(dto.email),
                name: new NameVO(dto.name)
            },
            userId: new IdVO(id)
        })

        return {
            user: user.getReturnbleProps(),
            statusCode: HttpStatus.OK,
            message: "Informações de usuário actualizadas com sucesso"
        }
    }

    @Put('/update/password/:id')
    @ApiOperation({summary: "Alterar senha de usuário."})
    @ApiParam({
        name: 'id',
        description: 'O UUID do usuário que será atualizado',
        example: 'f846cf11-f55b-4be4-9062-bf9f7f213d29'
    })
    @ApiOkResponse({
        description: "Actualização dos dados do usuário bem sucedida.",
        type: ChangeUserPasswordSuccessResponse,
        example: {
            message: "Senha atualizada com sucesso",
            statusCode: HttpStatus.OK,
            isChanged: true,
        }
    })
    async changePassword(@Body() dto: changeUserPassowrdDto, @Param('id') id: string) {
        const isUpdated = await this.userPasswordUpdater.execute({ newPassowrd: dto.newPassword, oldpassword: dto.oldPassword, userId: new IdVO(id) })

        if (isUpdated) return {
            message: 'Senha atualizada com sucesso',
            statusCode: HttpStatus.OK,
            isChanged: true
        }
    }

    @Delete()
    @ApiOperation({summary: "Deletar usuário."})
    @ApiParam({
        name: 'id',
        description: 'O UUID do usuário que será atualizado',
        example: 'f846cf11-f55b-4be4-9062-bf9f7f213d29'
    })
    @ApiOkResponse({
        description: "Acção de delete de usuário bem sucedida.",
        type: DeleteUserSuccessResponseDto,
        example: {
            message: "Usuário apagado com sucesso",
            statusCode: HttpStatus.OK,
            isChanged: true,
        }
    })
    async deleteUser(@Param('id') id: string) {
        const isDeleted = await this.userDeleter.execute(id)

        if (isDeleted) return {
            message: 'Usuário apagado com sucesso',
            statusCode: HttpStatus.OK,
            isDeleted: true
        }
    }
}