import { Injectable } from "@nestjs/common";
import { UseCasePort } from "@shared/application/ports/use-case.port";
import { UserRepositoryPort } from "../ports/user-repository.port";
import { IdVO } from "src/user/domain/value-objects/id.vo";

@Injectable()
export class DeleteUserUseCase implements UseCasePort<string, boolean>{
    constructor (private readonly userRepository: UserRepositoryPort) {}

    async execute(id: string):  Promise<boolean> {
        try {
            await this.userRepository.delete(new IdVO(id))
            return true
        }

        catch {
            return false
        }
    }
} 