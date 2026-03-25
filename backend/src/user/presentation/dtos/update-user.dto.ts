import { RegisterUserDto } from "./register-user.dto";

export class updateUserDto implements RegisterUserDto {
    birthdate!: string;
    email!: string;
    name!: string;
    password!: string;
}