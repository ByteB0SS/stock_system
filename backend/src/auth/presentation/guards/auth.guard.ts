import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from "@nestjs/common"
import { AccessAuthorizerUseCase } from "src/auth/application/use-cases/access-authorizer.use-case"

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private readonly accessAuthorizer: AccessAuthorizerUseCase) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest()

    const token = request.cookies?.access_token
    console.log(token)

    if (!token) {
      throw new UnauthorizedException("Não estás logado")
    }

    const user = await this.accessAuthorizer.execute({ token })

    request.user = user

    return true
  }
}
