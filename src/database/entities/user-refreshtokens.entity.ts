import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { User } from './user.entity';

@Entity('UserRefreshTokens')
export class UserRefreshToken {
  @PrimaryGeneratedColumn('uuid')
  Id: string;

  @Column({ type: 'uuid', nullable: false })
  UserId: string;

  @ManyToOne(() => User, (user) => user.refreshTokens, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'UserId' })
  user: User;

  @Column({ type: 'text', nullable: false })
  RefreshToken: string;

  @Column({ type: 'timestamptz', nullable: false })
  RefreshTokenExpiryTime: Date;

  @Column({ type: 'timestamptz', nullable: false })
  CreatedDate: Date;

  @Column({ type: 'uuid', nullable: false })
  CreatedBy: string;

  @Column({ type: 'timestamptz', nullable: false })
  LastModifiedDate: Date;

  @Column({ type: 'uuid', nullable: false })
  LastModifiedBy: string;

  @Column({ type: 'boolean', default: false })
  IsDelete: boolean;
}