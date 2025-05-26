import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Role } from './roles.entity';

@Entity('RoleClaims')
export class RoleClaim {
  @PrimaryGeneratedColumn('identity')
  Id: number;

  @Column({ type: 'uuid', nullable: false })
  RoleId: string;

  @ManyToOne(() => Role, (role) => role.roleClaims, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'RoleId' })
  role: Role;

  @Column({ type: 'text', nullable: false })
  ClaimType: string;

  @Column({ type: 'text', nullable: false })
  ClaimValue: string;
}