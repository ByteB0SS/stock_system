import { Inject, Injectable } from "@nestjs/common";
import { UseCasePort } from "@shared/application/ports/use-case.port";
import { User } from "src/user/domain/entities/user.entity";
import { USER_REPOSITORY, UserRepositoryPort } from "../ports/user-repository.port";

export interface GetUsersUseCaseInput {
    lastId?: string,
    limit?: number,
    slugFilter?: string,
    nameFilter?: string
}


@Injectable()
export class GetUsersUseCase implements UseCasePort<GetUsersUseCaseInput, User[]> {
    constructor(@Inject(USER_REPOSITORY) private readonly userRepository: UserRepositoryPort) { }

    async execute(input: GetUsersUseCaseInput): Promise<User[]> {
        const {lastId, limit, nameFilter, slugFilter} = input
        const users = await this.userRepository.findMany(lastId, limit, slugFilter, nameFilter);
        return users
    }
} 