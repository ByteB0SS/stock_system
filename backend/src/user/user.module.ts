import { Module } from "@nestjs/common"
import { AuthModule } from "src/auth/auth.module"
import { PrismaModule } from "src/config/prisma/prisma.module"
import { SharedModule } from "@shared/shared.module"
import { USER_REPOSITORY_SYMBOL } from "./application/ports/user-repository.port"
import { PrismaUserRepositoryAdapter } from "./infrastructure/adapters/prisma-user-repository.adpter"
import { AUTH_SESSION_GENERATOR_PORT } from "./application/ports/auth-session-generator.port"
import { AuthSessionGeneratorAdapter } from "./infrastructure/adapters/auth-session-generator.adapter"
import { HASH } from "@shared/application/ports/hash.port"
import { BcryptHashAdapter } from "@shared/infrastructure/adapters/bcrypt-hash.adapter"
import { UserController } from "./presentation/controllers/user.controller"

import { RegisterUserUseCase } from "./application/use-cases/register-user.use-case"
import { LoginUserUseCase } from "./application/use-cases/login.use-cases"
import { RefreshTokenUsecase } from "./application/use-cases/refresh-token.use-case"
import { UpdateUserUseCase } from "./application/use-cases/update-user.use-case"
import { DeleteUserUseCase } from "./application/use-cases/delete-user.use-case"
import { UpdateUserPasswordUseCase } from "./application/use-cases/update-user-password.use-case"
import { GetUserUseCase } from "./application/use-cases/get-user.use-case"
import { GetUsersUseCase } from "./application/use-cases/get-users.use-case"

@Module({
  imports: [PrismaModule, SharedModule],
  controllers: [UserController],
  providers: [
    RegisterUserUseCase,
    LoginUserUseCase,
    RefreshTokenUsecase,
    UpdateUserUseCase,
    DeleteUserUseCase,
    UpdateUserPasswordUseCase,
    GetUserUseCase,
    GetUsersUseCase,
    {
      provide: AUTH_SESSION_GENERATOR_PORT,
      useClass: AuthSessionGeneratorAdapter,
    },
    {
      provide: USER_REPOSITORY_SYMBOL,
      useClass: PrismaUserRepositoryAdapter,
    },
    {
      provide: HASH,
      useClass: BcryptHashAdapter,
    },
  ],
  exports: [USER_REPOSITORY_SYMBOL, RegisterUserUseCase, LoginUserUseCase, RefreshTokenUsecase, UpdateUserUseCase, DeleteUserUseCase, UpdateUserPasswordUseCase, GetUserUseCase, GetUsersUseCase],
})
export class UserModule {}
