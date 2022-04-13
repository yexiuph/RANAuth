import { IsAlphanumeric, IsNotEmpty } from 'class-validator';

export class UserDTO {
  @IsNotEmpty({ message: 'Username field should not be empty.' })
  @IsAlphanumeric()
  username: string;

  @IsNotEmpty({ message: 'Password field should not be empty.' })
  @IsAlphanumeric()
  password: string;
}
