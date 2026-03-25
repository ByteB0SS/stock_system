import { HASH, HashPort } from "@shared/application/ports/hash.port";
import { UseCasePort } from "@shared/application/ports/use-case.port";
import { User } from "src/user/domain/entities/user.entity";
import { USER_REPOSITORY, UserRepositoryPort } from "../ports/user-repository.port";
import { EmailVO } from "src/user/domain/value-objects/email.vo";
import { PasswordVO } from "src/user/domain/value-objects/password.vo";
import { Inject, Injectable } from "@nestjs/common";

export interface registerUserInputDto {
    email: string,
    name: string,
    password: string,
    birthdate: string,
}

@Injectable()
export class RegisterUserUseCase implements UseCasePort<registerUserInputDto, Promise<User>> {
    constructor(@Inject(HASH) private readonly hasher: HashPort, @Inject(USER_REPOSITORY) private readonly userRepository: UserRepositoryPort) {}

    async execute(input: registerUserInputDto): Promise<User> {
        const userWithSameEmail = await this.userRepository.findByEmail(new EmailVO(input.email))

        if (userWithSameEmail) {
            throw new Error('Email has account.')
        }

        PasswordVO.validateComplexity(input.password)

        const passwordHashed = await this.hasher.hash(input.password)

        const newUser = await this.userRepository.create(User.createInstance(input.name, passwordHashed, input.email, input.birthdate))

        return newUser
    }
}
