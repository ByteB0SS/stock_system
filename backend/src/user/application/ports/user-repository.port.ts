import { SlugVO } from "@shared/domain/value-objects/slug.vo";
import { User } from "src/user/domain/entities/user.entity";
import { EmailVO } from "src/user/domain/value-objects/email.vo";
import { IdVO } from "src/user/domain/value-objects/id.vo";
import { UserSelectors } from "../use-cases/get-user.use-case";

export interface UserRepositoryPort {
    create (user: User): Promise<User>
    findByUnique(uniqueSelectors: UserSelectors): Promise<User | null>
    findById (id: IdVO): Promise<User | null>
    findBySlug(slug: SlugVO): Promise<User | null>
    findByEmail(email: EmailVO): Promise<User | null>
    findMany (lastId?: string, limit?: number, slugFilter?: string, nameFilter?: string): Promise<User[]>
    delete(id: IdVO): Promise<void>
    update (user: User): Promise<User>
}

export const  USER_REPOSITORY = Symbol('USER_REPOSITORY')