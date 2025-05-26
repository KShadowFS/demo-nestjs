import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Post } from './posts.entity';

@Entity('PostViews')
export class PostView {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'uuid', type: 'uuid' })
  uuid: string;

  @Column({ name: 'PostIduuid' })
  postIdUuid: string;

  @ManyToOne(() => Post, (post) => post.postViews, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'PostIduuid' })
  post: Post;

  @Column({ name: 'PostItemHashId', type: 'text' })
  postItemHashId: string;

  @Column({ type: 'integer' })
  year: number;

  @Column({ type: 'integer' })
  month: number;

  @Column({ type: 'integer' })
  day: number;

  @Column({ type: 'integer' })
  view: number;
}