import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { User } from './user.entity';

@Entity('UserSocials')
export class UserSocial {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'uuid' })
  userId: string;

  @ManyToOne(() => User, (user) => user.socials, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'userId' })
  user: User;

  @Column({ type: 'int' })
  type: number;

  @Column({ type: 'text' })
  socialKey: string;

  @Column({ type: 'text' })
  firstName: string;

  @Column({ type: 'text' })
  lastName: string;

  @CreateDateColumn({ type: 'timestamptz' })
  createdDate: Date;

  @Column({ type: 'uuid' })
  createdBy: string;

  @UpdateDateColumn({ type: 'timestamptz' })
  lastModifiedDate: Date;

  @Column({ type: 'uuid' })
  lastModifiedBy: string;

  @Column({ default: false })
  isDelete: boolean;
}
