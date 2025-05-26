import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Post } from './posts.entity';
import { User } from './user.entity';

@Entity('PostVotes')
export class PostVote {
  @PrimaryGeneratedColumn('uuid')
  Id: string;

  @Column({ name: 'PostId', type: 'uuid', nullable: false })
  postId: string;

  @ManyToOne(() => Post, (post) => post.postVotes, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'PostId' })
  post: Post;

  @Column({ name: 'UserId', type: 'uuid', nullable: false })
  userId: string;

  @ManyToOne(() => User, (user) => user.postVotes, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'UserId' })
  user: User;

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