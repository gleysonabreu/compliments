import { Tag } from '@modules/tags/infra/typeorm/entities/Tag';
import { User } from '@modules/users/infra/typeorm/entities/User';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm';
import { v4 as uuid } from 'uuid';

@Entity('compliments')
class Compliment {
  @PrimaryColumn()
  id: string;

  @Column({ name: 'user_sender' })
  userSender: string;

  @JoinColumn({ name: 'user_sender' })
  @ManyToOne(() => User)
  senderUser: User;

  @Column({ name: 'user_receiver' })
  userReceiver: string;

  @JoinColumn({ name: 'user_receiver' })
  @ManyToOne(() => User)
  receiverUser: User;

  @Column({ name: 'tag_id' })
  tagId: string;

  @JoinColumn({ name: 'tag_id' })
  @ManyToOne(() => Tag)
  tag: Tag;

  @Column()
  message: string;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}

export { Compliment };
