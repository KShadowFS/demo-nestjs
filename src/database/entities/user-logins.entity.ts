import {
  Entity,
  PrimaryColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { User } from './user.entity';

@Entity('UserLogins')
export class UserLogin {
  @PrimaryColumn({ type: 'text' })
  loginProvider: string;

  @PrimaryColumn({ type: 'text' })
  providerKey: string;

  @Column({ type: 'text', nullable: true })
  providerDisplayName: string;

  @Column({ type: 'uuid' })
  userId: string;

  @ManyToOne(() => User, (user) => user.logins, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'userId' })
  user: User;
}
