import { IsString, IsNotEmpty } from 'class-validator';

export class ChangePasswordDto {
  @IsNotEmpty()
  @IsString()
  username: string;

  @IsNotEmpty()
  @IsString()
  password: string;

  @IsNotEmpty()
  @IsString()
  newPassword: string;

}
