import { OmitType, PartialType } from "@nestjs/swagger";
import { RegisterUserDto } from "./register-user.dto";

export class updateUserDto extends OmitType(RegisterUserDto, ['password'] as const) {

}