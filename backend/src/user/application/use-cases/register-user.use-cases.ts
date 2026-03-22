import { HashPort } from "@shared/application/ports/hash.port";
import { TokenPort } from "@shared/application/ports/token.port";
import { UseCasePort } from "@shared/application/ports/use-case.port";
import { User } from "src/user/domain/entities/user.entity";
import { UserRepositoryPort } from "../ports/user-repository.port";
import { EmailVO } from "src/user/domain/value-objects/email.vo";
import { PasswordVO } from "src/user/domain/value-objects/password.vo";

export interface registerUserInputDto {
    email: string,
    name: string,
    password: string,
    birthdate: string,
}

export class RegisterUserUseCase implements UseCasePort<registerUserInputDto, Promise<User>> {
    constructor(private readonly hasher: HashPort, private readonly tokenManager: TokenPort, private readonly userRepository: UserRepositoryPort) {}

    async execute(input: registerUserInputDto): Promise<User> {
        const userWithSameEmail = await this.userRepository.findByEmail(new EmailVO(input.email))

        if (userWithSameEmail) {
            throw new Error('Email has account.')
        }

        if (!PasswordVO.isValid(input.password)) {
            throw new Error('Invalid password format.')
        }

        const passwordHashed = await this.hasher.hash(input.password)

        const newUser = await this.userRepository.create(User.createInstance(input.name, passwordHashed, input.email, input.birthdate))

        return newUser
    }
}
