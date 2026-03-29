import { HttpException, Inject, Injectable } from "@nestjs/common";
import { UseCasePort } from "@shared/application/ports/use-case.port";
import { User } from "src/user/domain/entities/user.entity";
import { USER_REPOSITORY, UserRepositoryPort } from "../ports/user-repository.port";

export interface UserSelectors {
    id?: string
    slug?: string
}


@Injectable()
export class GetUserUseCase implements UseCasePort<UserSelectors, User>{
    constructor (@Inject(USER_REPOSITORY) private readonly userRepository: UserRepositoryPort) {}

async execute(input: UserSelectors): Promise<User> {
    const user = await this.userRepository.findByUnique(input);
    if (!user) {
        // O erro nasce aqui. O TS fica feliz porque o fluxo de 'null' é interrompido.
        throw new HttpException('Usuário não encontrado', 404)   
    }
    return user;
}
} 