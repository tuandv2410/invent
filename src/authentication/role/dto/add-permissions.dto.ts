import { IsNotEmpty } from "class-validator";

export class AddPermissionsDto {
  @IsNotEmpty()
  roleId: number;
  @IsNotEmpty()
  permissionsId: number[];
}