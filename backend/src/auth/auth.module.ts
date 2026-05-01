import { Global, Module } from "@nestjs/common";
import { AccessAuthorizerUseCase } from "./application/use-cases/access-authorizer.use-case";
import { TOKEN_SYMBOL } from "./application/ports/token.port";
import { JwtTokenAdapter } from "./infrastructure/adapter/jwt-token.adapter";
import { UserModule } from "src/user/user.module";
import { AuthGuard } from "./presentation/guards/auth.guard";

@Global()
@Module({
    controllers: [],
    imports: [
        UserModule
    ],
    providers: [
        AccessAuthorizerUseCase,
        AuthGuard,
        {
            provide: TOKEN_SYMBOL,
            useClass: JwtTokenAdapter,
        },
    ],
    exports: [AccessAuthorizerUseCase, TOKEN_SYMBOL, AuthGuard],
})
export class AuthModule { }