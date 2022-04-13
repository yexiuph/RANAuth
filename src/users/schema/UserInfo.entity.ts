import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('UserInfo')
export class UserInfo {
  @PrimaryGeneratedColumn()
  UserNum: number;

  @Column('varchar', { length: 20 })
  UserName: string;

  @Column('varchar', { length: 20 })
  UserID: string;

  @Column('varchar', { length: 20 })
  UserPass: string;

  @Column('varchar', { length: 20 })
  UserPass2: string;
}
