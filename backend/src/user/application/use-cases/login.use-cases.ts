import  { HASH, HashPort } from "@shared/application/ports/hash.port";
import  { TOKEN, TokenPort } from "@shared/application/ports/token.port";
import { UseCasePort } from "@shared/application/ports/use-case.port";
import  { USER_REPOSITORY, UserRepositoryPort } from "../ports/user-repository.port";
import { EmailVO } from "src/user/domain/value-objects/email.vo";
import { AUTH_SESSION_GENERATOR_PORT, AuthSessionGeneratorPort, userTokenPayload } from "../ports/auth-session-generator.port";
import { Inject, Injectable } from "@nestjs/common";

export interface loginUserInputDto {
    email: string,
    password: string,
}

export interface loginRetrunType {
    accessToken: string,
    refreshToken: string
}

@Injectable()
export class LoginUserUseCase implements UseCasePort<loginUserInputDto, Promise<loginRetrunType>> {
    constructor(@Inject(HASH) private readonly hasher: HashPort, @Inject(TOKEN) private readonly tokenManager: TokenPort, @Inject(USER_REPOSITORY) private readonly userRepository: UserRepositoryPort,@Inject(AUTH_SESSION_GENERATOR_PORT) private readonly resfreshAndAccessTokenGenerator: AuthSessionGeneratorPort) {}

    async execute(credentials: loginUserInputDto): Promise<loginRetrunType> {
        const userWithSameEmail = await this.userRepository.findByEmail(new EmailVO(credentials.email))
        
        if (!userWithSameEmail || !this.hasher.isValid(credentials.password, userWithSameEmail.getProps().password)) {
            throw new Error('Incorrect password or email.')
        }
        
        const userProps = userWithSameEmail.getProps()

        const payload: userTokenPayload = {
            sub: userProps.id,
            role: userProps.role,
            slug: userProps.slug
        }

        return this.resfreshAndAccessTokenGenerator.genTokens(payload)
    }
}
