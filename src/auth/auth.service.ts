import { Injectable } from '@nestjs/common';
import { UserDTO } from 'src/users/dto/Login.dto';
import { UsersService } from '../users/users.service';

@Injectable()
export class AuthService {
  constructor(private Users: UsersService) {}

  async validateUser(UserData: UserDTO): Promise<any> {
    const user = await this.Users.findOne(UserData.username);
    if (user && user.UserPass === UserData.password) {
      const { UserPass, ...result } = user;
      return result;
    }
    return null;
  }
}
