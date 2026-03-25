import { Injectable } from "@nestjs/common";
import { UseCasePort } from "@shared/application/ports/use-case.port";
import { User } from "src/user/domain/entities/user.entity";
import { UserRepositoryPort } from "../ports/user-repository.port";
import { IdVO } from "src/user/domain/value-objects/id.vo";
import { NameVO } from "src/user/domain/value-objects/name.vo";
import { EmailVO } from "src/user/domain/value-objects/email.vo";
import { BirthdateVO } from "src/user/domain/value-objects/birthdate.vo";
import { SlugVO } from "@shared/domain/value-objects/slug.vo";

export interface updateUserInput {
    name: NameVO,
    email: EmailVO,
    birthdate: BirthdateVO
}

@Injectable()
export class UpdateUserUseCase implements UseCasePort<{ data: updateUserInput, userId: IdVO }, User> {
    constructor(private readonly userRepository: UserRepositoryPort) { }

    async execute(input: { data: updateUserInput; userId: IdVO; }): Promise<User> {
        const user = await this.userRepository.findById(input.userId);
        if (!user) throw new Error("User doesn't exist.");

        if (input.data.email.get() !== user.getProps().email) {
            const emailConflict = await this.userRepository.findByEmail(input.data.email);

            if (emailConflict) {
                throw new Error("The new email is already in use, try another.");
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