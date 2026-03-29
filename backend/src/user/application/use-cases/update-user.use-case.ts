import { HttpException, Inject, Injectable } from "@nestjs/common";
import { UseCasePort } from "@shared/application/ports/use-case.port";
import { User } from "src/user/domain/entities/user.entity";
import { USER_REPOSITORY, UserRepositoryPort } from "../ports/user-repository.port";
import { IdVO } from "src/user/domain/value-objects/id.vo";
import { NameVO } from "src/user/domain/value-objects/name.vo";
import { EmailVO } from "src/user/domain/value-objects/email.vo";
import { BirthdateVO } from "src/user/domain/value-objects/birthdate.vo";

export interface updateUserInput {
    name: NameVO,
    email: EmailVO,
    birthdate: BirthdateVO
}

@Injectable()
export class UpdateUserUseCase implements UseCasePort<{ data: updateUserInput, userId: IdVO }, User> {
    constructor(@Inject(USER_REPOSITORY) private readonly userRepository: UserRepositoryPort) { }

    async execute(input: { data: updateUserInput; userId: IdVO; }): Promise<User> {
        const user = await this.userRepository.findById(input.userId);
        if (!user) throw new HttpException('Usuário não encontrado', 404)   

        if (input.data.email.get() !== user.getProps().email) {
            const emailConflict = await this.userRepository.findByEmail(input.data.email);

            if (emailConflict) {
                throw new HttpException('Já existe um usuário com este email', 400);
            }

            user.setEmail(input.data.email);
        }

        if (input.data.name.get() != user.getProps().name) {
            user.setName(input.data.name);
        }
        
        user.setBirthdate(input.data.birthdate);

        return this.userRepository.update(user);
    }
}