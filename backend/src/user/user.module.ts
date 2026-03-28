import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/config/prisma/prisma.module';
import { USER_REPOSITORY } from './application/ports/user-repository.port';
import { PrismaUserRepositoryAdapter } from './Infrastructure/adapters/prisma-user-repository.adpter';
import { AUTH_SESSION_GENERATOR_PORT } from './application/ports/auth-session-generator.port';
import { AuthSessionGeneratorAdapter } from './Infrastructure/adapters/auth-session-generator.adapter';
import { RegisterUserUseCase } from './application/use-cases/register-user.use-case';
import { HASH } from '@shared/application/ports/hash.port';
import { BcryptHashAdapter } from '@shared/infrastructure/adapters/bcrypt-hash.adapter';
import { SharedModule } from '@shared/shared.module';
import { UserController } from './presentation/controllers/user.controller';
import { LoginUserUseCase } from './application/use-cases/login.use-cases';
import { RefreshTokenDto } from './presentation/dtos/refresh-token.dtos';
import { RefreshTokenUsecase } from './application/use-cases/refresh-token.use-case';
import { UpdateUserUseCase } from './application/use-cases/update-user.use-case';
import { DeleteUserUseCase } from './application/use-cases/delete-user.use-case';
import { UpdateUserPasswordUseCase } from './application/use-cases/update-user-password.use-case';
import { GetUserUseCase } from './application/use-cases/get-user.use-case';
import { GetUsersUseCase } from './application/use-cases/get-users.use-case';

@Module({
    imports: [PrismaModule, SharedModule],
    providers: [
        RegisterUserUseCase,
        LoginUserUseCase,
        AuthSessionGeneratorAdapter,
        RefreshTokenUsecase,
        UpdateUserUseCase,
        DeleteUserUseCase,
        UpdateUserPasswordUseCase,
        GetUserUseCase,
        GetUsersUseCase,
        {
            provide: AUTH_SESSION_GENERATOR_PORT,
            useClass: AuthSessionGeneratorAdapter
        },
        {
            provide: USER_REPOSITORY,
            useClass: PrismaUserRepositoryAdapter
        },
        {
            provide: HASH,
            useClass: BcryptHashAdapter
        },
    ],
    exports: [
        RegisterUserUseCase,
        LoginUserUseCase,
        RefreshTokenUsecase,
        UpdateUserUseCase,
        DeleteUserUseCase,
        UpdateUserPasswordUseCase,
        GetUserUseCase,
        GetUsersUseCase,
    ],
    controllers: [UserController]

})
export class UserModule { }
