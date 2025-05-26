import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Post } from './posts.entity';

@Entity('Categories')
export class Category {
  @PrimaryGeneratedColumn('uuid')
  Id: string;

  @Column({ type: 'text', nullable: false })
  ThumbnailUrl: string;

  @Column({ type: 'text', nullable: false })
  Name: string;

  @Column({ type: 'text', nullable: false })
  Title: string;

  @Column({ type: 'text', nullable: false })
  Summary: string;

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

  @Column({ type: 'boolean', default: false })
  IsActive: boolean;

  @OneToMany(() => Post, (post) => post.category, { cascade: false })
  posts: Post[];
}