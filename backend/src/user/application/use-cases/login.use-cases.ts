import { HASH, HashPort } from "@shared/application/ports/hash.port";
import { TOKEN, TokenPort } from "@shared/application/ports/token.port";
import { UseCasePort } from "@shared/application/ports/use-case.port";
import { USER_REPOSITORY, UserRepositoryPort } from "../ports/user-repository.port";
import { EmailVO } from "src/user/domain/value-objects/email.vo";
import { AUTH_SESSION_GENERATOR_PORT, AuthSessionGeneratorPort, userTokenPayload } from "../ports/auth-session-generator.port";
import { HttpException, Inject, Injectable } from "@nestjs/common";
import { User } from "src/user/domain/entities/user.entity";


export interface loginUserInputDto {
    email: string,
    password: string,
}

export interface loginRetrunType {
    accessToken: string,
    refreshToken: string
    user?: User
}

@Injectable()
export class LoginUserUseCase implements UseCasePort<loginUserInputDto, Promise<loginRetrunType>> {
    constructor(@Inject(HASH) private readonly hasher: HashPort, @Inject(TOKEN) private readonly tokenManager: TokenPort, @Inject(USER_REPOSITORY) private readonly userRepository: UserRepositoryPort, @Inject(AUTH_SESSION_GENERATOR_PORT) private readonly resfreshAndAccessTokenGenerator: AuthSessionGeneratorPort) { }

    async execute(credentials: loginUserInputDto, returnUser: boolean = true): Promise<loginRetrunType> {
        const userWithSameEmail = await this.userRepository.findByEmail(new EmailVO(credentials.email))

        if (!userWithSameEmail) {
            throw new HttpException('senha ou email incorretos', 400)
        }

        const passwordIsCorrect = await this.hasher.isValid(credentials.password, userWithSameEmail.getProps().password)
        if (!passwordIsCorrect) {
            throw new HttpException('senha ou email incorretos', 400)
        }

        const userProps = userWithSameEmail.getProps()

        const payload: userTokenPayload = {
            sub: userProps.id,
            role: userProps.role,
            slug: userProps.slug
        }
        const tokens = this.resfreshAndAccessTokenGenerator.genTokens(payload)

        if (!returnUser) return tokens

        return {
            ...tokens,
            user: userWithSameEmail
        }
    }
}
