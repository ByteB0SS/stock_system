import { Body, Controller, Delete, Get, HttpCode, HttpException, HttpStatus, Param, Post, Put, Query } from "@nestjs/common";
import { ApiOperation, ApiTags, ApiCreatedResponse, ApiOkResponse, ApiProperty, ApiParam, ApiQuery, ApiBadRequestResponse, ApiConflictResponse, ApiResponse } from "@nestjs/swagger";
import { RegisterUserUseCase } from "src/user/application/use-cases/register-user.use-case";
import { RegisterUserDto, RegisterSuccessResponse, RegisterUserConflictResponseDto} from "../dtos/register-user.dtos";
import { LoginUserUseCase } from "src/user/application/use-cases/login.use-cases";
import { LoginDto, LoginSuccessResponse } from "../dtos/login.dtos";
import { RefreshTokenUsecase } from "src/user/application/use-cases/refresh-token.use-case";
import { RefreshTokenDto, RefreshTokenSuccessDto } from "../dtos/refresh-token.dtos";
import { UpdateUserUseCase } from "src/user/application/use-cases/update-user.use-case";
import { updateUserDto, UpdateUserSuccessResponseDto } from "../dtos/update-user.dtos";
import { BirthdateVO } from "src/user/domain/value-objects/birthdate.vo";
import { EmailVO } from "src/user/domain/value-objects/email.vo";
import { NameVO } from "src/user/domain/value-objects/name.vo";
import { IdVO } from "@shared/domain/value-objects/id.vo";
import { DeleteUserUseCase } from "src/user/application/use-cases/delete-user.use-case";
import { changeUserPassowrdDto } from "../dtos/change-user-password.dto";
import { UpdateUserPasswordUseCase } from "src/user/application/use-cases/update-user-password.use-case";
import { getUserQuerydto } from "../dtos/get-user-query.dto";
import { GetUserUseCase } from "src/user/application/use-cases/get-user.use-case";
import { GetUsersUseCase } from "src/user/application/use-cases/get-users.use-case";
import { IReturnbleUser } from "src/user/domain/entities/user.entity";
import { DeleteUserSuccessResponseDto } from "../dtos/delete-user.dtos";
import { ChangeUserPasswordSuccessResponse } from "../dtos/update-user-password.dto";
import { BadRequestResponseDto, ServerErrorResponseDto } from "../dtos/comoms-responses.dtos";

@Controller("user")
@ApiTags("Usuário")
@ApiResponse({status: 500, description: 'Erro no servidor', type: ServerErrorResponseDto})
@ApiBadRequestResponse({description: 'Erro de validação dos dados enviados', type: BadRequestResponseDto})
export class UserController {
    constructor(
        private readonly userRegister: RegisterUserUseCase,
        private readonly login: LoginUserUseCase,
        private readonly tokenRefresher: RefreshTokenUsecase,
        private readonly userUpdater: UpdateUserUseCase,
        private readonly userDeleter: DeleteUserUseCase,
        private readonly userPasswordUpdater: UpdateUserPasswordUseCase,
        private readonly userGetter: GetUserUseCase,
        private readonly usersGetter: GetUsersUseCase
    ) { }

    @Post("/auth/register")
    @ApiOperation({ summary: "Cadastrar usuário." })
    @ApiCreatedResponse({
        description: "Conta criada com sucesso",
        type: RegisterSuccessResponse,
    })
    @ApiConflictResponse({description: 'Erro de conflito, email em uso', type: RegisterUserConflictResponseDto})
    async registerUser(@Body() dto: RegisterUserDto) {
        const user = (await this.userRegister.execute(dto))
        const userProps = user.getProps()
        console.log(userProps.password)
        const tokens = await this.login.execute({ email: userProps.email, password: dto.password }, false)

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
    })
    async loginUser(@Body() dto: LoginDto) {
        const response = await this.login.execute(dto)

        if (!response.user) {
            throw new HttpException('Ocorreu um erro ao tentar recuperar os dados do usuário durante o login', 500)
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
        type: UpdateUserSuccessResponseDto,
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
    @ApiOperation({ summary: "Alterar senha de usuário." })
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
    @ApiOperation({ summary: "Deletar usuário." })
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

    @Get('get')
    @ApiQuery({
        name: 'id',
        required: false,
        example: 'f846cf11-f55b-4be4-9062-bf9f7f213d29',
        description: 'O UUID único do usuário'
    })
    @ApiQuery({
        name: 'slug',
        required: false,
        example: 'rubem-ernesto-figueiredo_6e8163e928',
        description: 'O slug amigável do usuário'
    })
    async getUser(@Query('id') id: string, @Query('slug') slug: string) {
        return {
            message: "Usuário encontrado.",
            statusCode: 200,
            user: (await this.userGetter.execute({ id: id, slug: slug })).getReturnbleProps()
        }
    }


    @Get('get-many')
    async getUsers(@Query('limit') limit?: number, @Query('last_id') last_id?: string, @Query('slug_filter') slug_filter?: string, @Query('name_filter') name_filter?: string) {
        const users = await this.usersGetter.execute({lastId: last_id, limit: limit, slugFilter: slug_filter, nameFilter: name_filter})

        let usersToreturn: IReturnbleUser[] = []

        users.forEach((user) => {
            usersToreturn.push(user.getReturnbleProps())
        })

        return {
            message: usersToreturn.length == 0 ? "Usuários não encontrados" : "Busca de usuarios com sucesso.",
            statusCode: 200,
            users: usersToreturn
        }
    }
}