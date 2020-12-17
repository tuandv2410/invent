import { IsNotEmpty } from "class-validator";

export class AddRoleDto {
  @IsNotEmpty()
  idUser: string;
  @IsNotEmpty()
  idRole: string;
}