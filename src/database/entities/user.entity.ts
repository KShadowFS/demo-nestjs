import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from 'typeorm';
import { UserLogin } from './userlogins.entity';

@Entity('Users')
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', length: 256, nullable: true })
  firstName: string;

  @Column({ type: 'varchar', length: 256, nullable: true })
  lastName: string;

  @Column({ type: 'timestamptz', nullable: true })
  dateOfBirth: Date;

  @Column({ type: 'int', nullable: true })
  gender: number;

  @Column({ type: 'text', nullable: true })
  refreshToken: string;

  @Column({ type: 'timestamptz', nullable: true })
  refreshTokenExpiryTime: Date;

  @Column({ type: 'text', nullable: true })
  referralCode: string;

  @Column({ type: 'varchar', length: 500, nullable: true })
  avatar: string;

  @Column({ type: 'int', nullable: true })
  status: number;

  @Column({ type: 'boolean', default: false })
  isDelete: boolean;

  @CreateDateColumn({ type: 'timestamptz' })
  createdDate: Date;

  @Column({ type: 'uuid', nullable: true })
  createdBy: string;

  @UpdateDateColumn({ type: 'timestamptz' })
  lastModifiedDate: Date;

  @Column({ type: 'uuid', nullable: true })
  lastModifiedBy: string;

  @Column({ type: 'timestamptz', nullable: true })
  activatedDate: Date;

  @Column({ type: 'timestamptz', nullable: true })
  lastLoginDate: Date;

  @Column({ type: 'text', nullable: true })
  statusReason: string;

  @Column({ type: 'text', nullable: true })
  location: string;

  @Column({ type: 'varchar', length: 256, nullable: true })
  userName: string;

  @Column({ type: 'varchar', length: 256, nullable: true })
  normalizedUserName: string;

  @Column({ type: 'varchar', length: 256, nullable: true })
  email: string;

  @Column({ type: 'varchar', length: 256, nullable: true })
  normalizedEmail: string;

  @Column({ type: 'boolean', default: false })
  emailConfirmed: boolean;

  @Column({ type: 'text', nullable: true })
  passwordHash: string;

  @Column({ type: 'text', nullable: true })
  securityStamp: string;

  @Column({ type: 'text', nullable: true })
  concurrencyStamp: string;

  @Column({ type: 'text', nullable: true })
  phoneNumber: string;

  @Column({ type: 'boolean', default: false })
  phoneNumberConfirmed: boolean;

  @Column({ type: 'boolean', default: false })
  twoFactorEnabled: boolean;

  @Column({ type: 'timestamptz', nullable: true })
  lockoutEnd: Date;

  @Column({ type: 'boolean', default: false })
  lockoutEnabled: boolean;

  @Column({ type: 'int', default: 0 })
  accessFailedCount: number;

  @OneToMany(() => UserLogin, (login) => login.user, { cascade: true })
logins: UserLogin[];
}
