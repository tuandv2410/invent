import { IsNotEmpty } from "class-validator";

export class AddPermissionsDto {
  @IsNotEmpty()
  idRole: string;
  @IsNotEmpty()
  idPermissions: string[];
}