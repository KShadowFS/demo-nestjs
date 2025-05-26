import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Post } from './posts.entity';

@Entity('MediaFiles')
export class MediaFile {
  @PrimaryGeneratedColumn('uuid')
  Id: string;

  @Column({ type: 'int', nullable: false })
  FileType: number;

  @Column({ type: 'int', nullable: false })
  FileHostType: number;

  @Column({ type: 'text', nullable: false })
  Name: string;

  @Column({ type: 'text', nullable: false })
  Url: string;

  @Column({ type: 'text', nullable: false })
  MiniUrl: string;

  @Column({ type: 'text', nullable: false })
  FileKey: string;

  @Column({ type: 'bigint', nullable: false })
  FileSize: number;

  @Column({ type: 'int', nullable: false })
  Width: number;

  @Column({ type: 'int', nullable: false })
  Height: number;

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

  @OneToMany(() => Post, (post) => post.coverImg, { cascade: false })
  coverPosts: Post[];

  @OneToMany(() => Post, (post) => post.thumbnailImg, { cascade: false })
  thumbnailPosts: Post[];
}