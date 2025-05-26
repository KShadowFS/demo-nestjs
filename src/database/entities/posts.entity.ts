import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, OneToMany } from 'typeorm';
import { User } from './user.entity';
import { Category } from './categories.entity';
import { MediaFile } from './mediafiles.entity';
import { PostView } from './post-views.entity';
import { PostVote } from './post-votes.entity';
import { PostItem } from './post-items.entity';
import { PostUserActivity } from './post-user-actives.entity';

@Entity('Posts')
export class Post {
  @PrimaryGeneratedColumn('uuid')
  Id: string;

  @Column({ type: 'uuid', nullable: false })
  HashId: string;

  @Column({ type: 'uuid', nullable: false })
  UserId: string;

  @ManyToOne(() => User, (user) => user.posts, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'UserId' })
  user: User;

  @Column({ type: 'text', nullable: false })
  Name: string;

  @Column({ type: 'text', nullable: false })
  Title: string;

  @Column({ type: 'text', nullable: false })
  Summary: string;

  @Column({ type: 'int', nullable: false })
  Status: number;

  @Column({ type: 'text', nullable: false })
  StatusReason: string;

  @Column({ type: 'boolean', default: false })
  IsCompleted: boolean;

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

  @Column({ type: 'uuid', nullable: true })
  CategoryId: string;

  @ManyToOne(() => Category, (category) => category.posts, { onDelete: 'SET NULL' })
  @JoinColumn({ name: 'CategoryId' })
  category: Category;

  @Column({ type: 'uuid', nullable: true })
  CoverImgId: string;

  @ManyToOne(() => MediaFile, (mediaFile) => mediaFile.coverPosts, { onDelete: 'SET NULL' })
  @JoinColumn({ name: 'CoverImgId' })
  coverImg: MediaFile;

  @Column({ type: 'timestamptz', nullable: true })
  PublishDate: Date;

  @Column({ type: 'uuid', nullable: true })
  ThumbnailImgId: string;

  @ManyToOne(() => MediaFile, (mediaFile) => mediaFile.thumbnailPosts, { onDelete: 'SET NULL' })
  @JoinColumn({ name: 'ThumbnailImgId' })
  thumbnailImg: MediaFile;

  @OneToMany(() => PostView, (postView) => postView.post)
  postViews: PostView[];

  @OneToMany(() => PostVote, (postVote) => postVote.post)
  postVotes: PostVote[];

  @OneToMany(() => PostItem, (postItem) => postItem.post)
  postItems: PostItem[]

  @OneToMany(() => PostUserActivity, (postUserActivity) => postUserActivity.post)
  postUserActivities: PostUserActivity[];
}