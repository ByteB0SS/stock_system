import { EmailVO } from "../value-objects/email.vo";
import { IdVO } from "../value-objects/id.vo";
import { NameVO } from "../value-objects/name.vo";
import { PasswordVO } from "../value-objects/password.vo";
import { SlugVO } from "@shared/domain/value-objects/slug.vo";
import { BirthdateVO } from "../value-objects/birthdate.vo";

export interface IUser {
    readonly id: IdVO
    name: NameVO
    email: EmailVO
    slug: SlugVO
    password: PasswordVO
    birthdate: BirthdateVO
    status: "ACTIVE" | "DELETED" | "PADDING" | "SUSPENDED"
    role: "ADMIN" | "NORMAL"
    deletedAt?: Date | null
    readonly createdAt?: Date | null
    updatedAt?: Date | null
}

export interface IPrimitiveUser {
    readonly id: string
    name: string
    email: string
    slug: string
    password: string
    birthdate: Date
    status: "ACTIVE" | "DELETED" | "PADDING" | "SUSPENDED"
    role: "ADMIN" | "NORMAL"
    deletedAt?: Date | null
    readonly createdAt?: Date | null
    updatedAt?: Date | null
}

export type IReturnbleUser = Omit<IPrimitiveUser, 'password'>

export class User {
    private readonly props: IUser

    private constructor(userProps: IUser) {
        this.props = userProps
        Object.freeze(this)
    }

    
    
    static createInstance(name: string, passwordHashed: string, email: string, birthdate: string | Date, role: "ADMIN" | "NORMAL" = "NORMAL", status: "ACTIVE" | "DELETED" | "PADDING" | "SUSPENDED" = "ACTIVE"): User {
        const passwordVO = new PasswordVO(passwordHashed)
        const idVO = new IdVO()
        const nameVO = new NameVO(name)
        const emailVO = new EmailVO(email)
        const birthdateVO = new BirthdateVO(birthdate)
        const slugVO = SlugVO.createFromText(nameVO.get())
        
        return new User({ birthdate: birthdateVO, email: emailVO, id: idVO, name: nameVO, password: passwordVO, role: role, status: status, slug: slugVO })
    }
    
    static restore(props: IUser): User {
        return new User(props);
    }

    getProps(): IPrimitiveUser {
        return {
            id: this.props.id.get(),
            name: this.props.name.get(),
            email: this.props.email.get(),
            birthdate: this.props.birthdate.get(),
            slug: this.props.slug.get(),
            password: this.props.password.get(),
            status: this.props.status,
            role: this.props.role,
            createdAt: this.props.createdAt,
            updatedAt: this.props.updatedAt,
            deletedAt: this.props.deletedAt,
        }
    }

    getReturnbleProps (): IReturnbleUser {
        const {password, ...propsToReturn} = this.getProps()
        return propsToReturn
    }
    
    setName(name: NameVO) {
        this.props.name = name 
        this.props.slug = SlugVO.createFromText(name.get())
    }
    
    setEmail(email: EmailVO) {
        this.props.email = email
    }
    
    setPassword(password: PasswordVO) {
        this.props.password = password
    }
    
    setBirthdate(birthdate: BirthdateVO) {
        this.props.birthdate = birthdate
    }
    
    private setSlug(slug: SlugVO) {
        this.props.slug = slug
    }

    setRole (role: "ADMIN" | "NORMAL") {
        this.props.role = role
    }

    setStatus (status: "ACTIVE" | "DELETED" | "PADDING" | "SUSPENDED") {
        this.props.status = status
    }
}

