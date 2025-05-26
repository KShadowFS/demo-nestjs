import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { UserRole } from './user-roles.entity';
import { RoleClaim } from './role-claims.entity';

@Entity('Roles')
export class Role {
  @PrimaryGeneratedColumn('uuid')
  Id: string;

  @Column({ type: 'text', nullable: false })
  DisplayName: string;

  @Column({ type: 'varchar', length: 256, nullable: false })
  Name: string;

  @Column({ type: 'varchar', length: 256, nullable: false })
  NormalizedName: string;

  @Column({ type: 'text', nullable: false })
  ConcurrencyStamp: string;

  @OneToMany(() => UserRole, (userRole) => userRole.role, { cascade: true })
  userRoles: UserRole[];

  @OneToMany(() => RoleClaim, (roleClaim) => roleClaim.role, { cascade: true })
  roleClaims: RoleClaim[];
}