import { IsNotEmpty } from "class-validator";

export class AddPermissionsDto {
  @IsNotEmpty()
  userId: number;
  @IsNotEmpty()
  permissionsId: number[];
}