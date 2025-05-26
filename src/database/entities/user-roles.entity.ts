import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { User } from './user.entity';
import { Role } from './roles.entity';

@Entity('UserRoles')
export class UserRole {
  @PrimaryGeneratedColumn('uuid')
  Id: string;

  @Column({ type: 'uuid', nullable: false })
  UserId: string;

  @ManyToOne(() => User, (user) => user.roles, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'UserId' })
  user: User;

  @Column({ type: 'uuid', nullable: false })
  RoleId: string;

  @ManyToOne(() => Role, (role) => role.userRoles, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'RoleId' })
  role: Role;
}