import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, OneToMany } from 'typeorm';
import { Post } from './posts.entity';
import { PostUserActivity } from './post-user-actives.entity';

@Entity('PostItems')
export class PostItem {
  @PrimaryGeneratedColumn('uuid')
  Id: string;

  @Column({ name: 'PostId', type: 'uuid', nullable: false })
  postId: string;

  @ManyToOne(() => Post, (post) => post.postItems, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'PostId' })
  post: Post;

  @Column({ type: 'text', nullable: false })
  Title: string;

  @Column({ type: 'text', nullable: false })
  Name: string;

  @Column({ type: 'text', nullable: false })
  HashId: string;

  @Column({ type: 'text', nullable: false })
  Body: string;

  @Column({ type: 'integer', nullable: false })
  Status: number;

  @Column({ type: 'timestamptz', nullable: true })
  PublishDate: Date;

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

  @Column({ type: 'integer', nullable: false })
  TotalPos: number;

  @OneToMany(() => PostUserActivity, (PostUserActivity) => PostUserActivity.postItem, { cascade: false })
  postUserActivities: PostUserActivity[];
}