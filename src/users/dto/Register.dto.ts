import { IsAlphanumeric, IsNotEmpty } from 'class-validator';

export class RegisterDTO {
  @IsNotEmpty({ message: 'Username field should not be empty.' })
  @IsAlphanumeric()
  username: string;

  @IsNotEmpty({ message: 'Password field should not be empty.' })
  @IsAlphanumeric()
  password: string;

  @IsNotEmpty({ message: 'Pincode field should not be empty.' })
  @IsAlphanumeric()
  password2: string;
}
