import { Inject, Injectable, UnauthorizedException } from '@nestjs/common';
import { UseCasePort } from '@shared/application/ports/use-case.port';
import { USER_REPOSITORY_SYMBOL, UserRepositoryPort } from 'src/user/application/ports/user-repository.port';
import { TOKEN_SYMBOL, TokenPort } from '../ports/token.port';
import { IdVO } from '@shared/domain/value-objects/id.vo';
import { EmailVO } from 'src/user/domain/value-objects/email.vo';
import { SlugVO } from '@shared/domain/value-objects/slug.vo';

type AccessAuthorizerInput = {
    token: string;
    tokenType?: 'ACCESS_TOKEN';
};

type AccessAuthorizerOutput = {
    userId: IdVO;
    email: EmailVO;
    slug: SlugVO
};

@Injectable()
export class AccessAuthorizerUseCase
    implements UseCasePort<AccessAuthorizerInput, AccessAuthorizerOutput> {
    constructor(
        @Inject(TOKEN_SYMBOL) private readonly tokenPort: TokenPort,
        @Inject(USER_REPOSITORY_SYMBOL) private readonly userRepository: UserRepositoryPort,
    ) { }

    async execute(input: AccessAuthorizerInput): Promise<AccessAuthorizerOutput> {
        const result = this.tokenPort.isValid(
            input.token,
            input.tokenType ?? 'ACCESS_TOKEN',
        );

        if (!result.isValid) {
            throw new UnauthorizedException('Não estás logado.');
        }

        const payload: any = result.payload;

        const user = await this.userRepository.findById(payload.sub);

        if (!user || user.getProps().deletedAt) {
            throw new UnauthorizedException('Este usuário foi apagado ou não está ativo.');
        }

        return {
            userId: user.getProps().id,
            email: user.getProps().email,
            slug: user.getProps().slug
        };
    }
}