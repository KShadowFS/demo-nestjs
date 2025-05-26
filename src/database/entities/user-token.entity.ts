import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { User } from './user.entity';

@Entity('UserTokens')
export class UserToken {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'uuid', nullable: false })
  userId: string;

  @ManyToOne(() => User, (user) => user.tokens, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'userId' })
  user: User;

  @Column({ type: 'text', nullable: false })
  LoginProvider: string;

  @Column({ type: 'text', nullable: false })
  Name: string;

  @Column({ type: 'text', nullable: false })
  Value: string;

  @Column({ type: 'timestamp with time zone', nullable: false })
  ExpiredDate: Date;
}