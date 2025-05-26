import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { User } from './user.entity';

@Entity('UserClaims')
export class UserClaim {
  @PrimaryGeneratedColumn('identity')
  Id: number;

  @Column({ type: 'uuid', nullable: false })
  UserId: string;

  @ManyToOne(() => User, (user) => user.claims, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'UserId' })
  user: User;

  @Column({ type: 'text', nullable: false })
  ClaimType: string;

  @Column({ type: 'text', nullable: false })
  ClaimValue: string;
}