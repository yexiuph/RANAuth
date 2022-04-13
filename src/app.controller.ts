import { Controller, Request, Post, UseGuards, Body } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AppService } from './app.service';
import { UsersService } from './users/users.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly UserService: UsersService,
  ) {}

  @UseGuards(AuthGuard('local'))
  @Post('auth/login')
  async login() {
    return { isSuccess: true };
  }

  @Post('auth/register')
  async register(@Body() User: any) {
    return await this.UserService.UserRegister(User.username, User.password);
  }
}
