import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserInfo } from './schema/UserInfo.entity';

@Module({
  imports: [TypeOrmModule.forFeature([UserInfo])],
  providers: [UsersService],
  exports: [UsersService],
})
export class UsersModule {}
