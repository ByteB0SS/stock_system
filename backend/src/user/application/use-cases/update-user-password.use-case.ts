import { Injectable } from "@nestjs/common";
import { UseCasePort } from "@shared/application/ports/use-case.port";
import { UserRepositoryPort } from "../ports/user-repository.port";
import { IdVO } from "src/user/domain/value-objects/id.vo";
import { HashPort } from "@shared/application/ports/hash.port";
import { PasswordVO } from "src/user/domain/value-objects/password.vo";

export interface UpdateUserPasswordInput {
    oldpassword: string,
    newPassowrd: string, 
    userId: IdVO
}

@Injectable()
export class UpdateUserPasswordUseCase implements UseCasePort<UpdateUserPasswordInput, boolean>{
    constructor (private readonly userRepository: UserRepositoryPort, private readonly hasher: HashPort) {}

    async execute(input: UpdateUserPasswordInput): Promise<boolean> {
        const userToUpdate = await this.userRepository.findById(input.userId)

        if (!userToUpdate) {
            throw new Error ("User not found.")
        }

        if (!await this.hasher.isValid(input.oldpassword, userToUpdate.getProps().password)){
            throw new Error ("Old password is incorrect.")
        }

        PasswordVO.validateComplexity(input.newPassowrd)

        userToUpdate.setPassword(new PasswordVO(await this.hasher.hash(input.newPassowrd)))

        try {   
            await this.userRepository.update(userToUpdate)
            return true
        }
        catch {
            return false
        }
    }
}