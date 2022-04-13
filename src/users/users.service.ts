import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserInfo } from './schema/UserInfo.entity';
import { RegisterDTO } from './dto/Register.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserInfo)
    private readonly UserInfo: Repository<UserInfo>,
  ) {}

  async findOne(username: string): Promise<UserInfo> {
    return await this.UserInfo.createQueryBuilder('user')
      .select('user.UserPass')
      .addSelect('user.UserName')
      .where('user.UserName = :username', { username })
      .getOne();
  }

  async CheckExisting(username: string) {
    return await this.UserInfo.createQueryBuilder('user')
      .select('user.UserName')
      .where('user.UserName = :username', { username })
      .getOne();
  }

  async UserRegister(RegData: RegisterDTO): Promise<UserInfo | any> {
    const user = new UserInfo();
    user.UserName = RegData.username;
    user.UserPass = RegData.password;
    user.UserID = RegData.username;
    user.UserPass2 = RegData.password2;
    if (await this.CheckExisting(RegData.username)) {
      return { message: 'User already exists', isSuccess: false };
    }
    return await this.UserInfo.save(user).then(() => {
      return { message: 'User created', isSuccess: true }; // return user
    });
  }
}
