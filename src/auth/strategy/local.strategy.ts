import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from '../auth.service';
import { UserDTO } from '../../users/dto/Login.dto';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super();
  }

  async validate(UserData: UserDTO): Promise<any> {
    const user = await this.authService.validateUser(UserData);
    if (!user) {
      throw new UnauthorizedException();
    }
    return user;
  }
}
