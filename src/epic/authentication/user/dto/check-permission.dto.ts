import { IsNotEmpty } from "class-validator";

export class CheckPermissionDto {
  @IsNotEmpty()
  userId: number;
  @IsNotEmpty()
  permissionId: number;
}