import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { User } from './user.entity';
import { Post } from './posts.entity';
import { PostItem } from './post-items.entity';

@Entity('PostUserActivities')
export class PostUserActivity {
  @PrimaryGeneratedColumn('uuid')
  Id: string;

  @Column({ name: 'PostId', type: 'uuid', nullable: false })
  postId: string;

  @ManyToOne(() => Post, (post) => post.postUserActivities, {onDelete: 'CASCADE'})
  @JoinColumn({ name: 'PostId' })
  post: Post;

  @Column({ name: 'PostItemId', type: 'uuid', nullable: false })
  postItemId: string;

  @ManyToOne(() => PostItem, (postItem) => postItem.postUserActivities, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'PostItemId' })
  postItem: PostItem;

  @Column({ name: 'UserId', type: 'uuid', nullable: false })
  userId: string;

  @ManyToOne(() => User, (user) => user.postUserActivities, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'UserId' })
  user: User;

  @Column({ type: 'timestamptz', nullable: false })
  Date: Date;

  @Column({ type: 'integer', nullable: false })
  LatestPos: number;

  @Column({ name: 'PostItemHashId', type: 'text', nullable: false })
  postItemHashId: string;
}