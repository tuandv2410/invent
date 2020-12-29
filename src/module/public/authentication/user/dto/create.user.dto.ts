import { IsString, MinLength, MaxLength, Matches, IsEmail, IsNotEmpty } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  @IsString()
  @MinLength(4)
  @MaxLength(20)
  username: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(8)
  @MaxLength(20)
  @Matches(
    /((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/,
    { message: 'password too weak' },
  )
  password: string;

  @IsNotEmpty()
  @IsString()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsString()
  org: string;
}
