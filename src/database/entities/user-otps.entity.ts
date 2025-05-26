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

@Entity('UserOtps')
export class UserOtp {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'uuid' })
  userId: string;

  @ManyToOne(() => User, (user) => user.otps, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'userId' })
  user: User;

  @Column({ type: 'int' })
  otpType: number;

  @Column({ type: 'text' })
  token: string;

  @Column({ type: 'text' })
  destination: string;

  @Column({ type: 'text' })
  code: string;

  @Column({ type: 'timestamptz' })
  expiryTime: Date;

  @CreateDateColumn({ type: 'timestamptz' })
  createdDate: Date;

  @UpdateDateColumn({ type: 'timestamptz' })
  lastModifiedDate: Date;

  @Column({ type: 'uuid' })
  createdBy: string;

  @Column({ type: 'uuid' })
  lastModifiedBy: string;

  @Column({ default: false })
  isDelete: boolean;
}
