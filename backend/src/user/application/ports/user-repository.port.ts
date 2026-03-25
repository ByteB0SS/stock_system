import { SlugVO } from "@shared/domain/value-objects/slug.vo";
import { User } from "src/user/domain/entities/user.entity";
import { EmailVO } from "src/user/domain/value-objects/email.vo";
import { IdVO } from "src/user/domain/value-objects/id.vo";

export interface UserRepositoryPort {
    create (user: User): Promise<User>
    findById (id: IdVO): Promise<User | null>
    findBySlug(slug: SlugVO): Promise<User | null>
    findByEmail(email: EmailVO): Promise<User | null>
    findMany (limit: number, lastId: string): Promise<User[]>
    delete(id: IdVO): Promise<void>
    update (user: User): Promise<User>
}

export const  USER_REPOSITORY = Symbol('USER_REPOSITORY')