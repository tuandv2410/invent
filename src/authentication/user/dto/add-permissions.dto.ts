import { IsNotEmpty } from "class-validator";

export class AddPermissionsDto {
  @IsNotEmpty()
  idUser: string;
  @IsNotEmpty()
  idPermissions: string[];
}