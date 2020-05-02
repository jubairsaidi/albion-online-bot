import { Transform } from 'class-transformer';
import { Moment } from 'moment';
import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from 'typeorm';

import { DateTransformer } from '../date-transformer';

@Entity()
export class LastEvent {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar', { nullable: true })
  lastEventId: string;

  @Transform((created) => created?.format() || null)
  @CreateDateColumn({ transformer: new DateTransformer() })
  lastMessageAt: Moment;

  @Transform((created) => created?.format() || null)
  @CreateDateColumn({ transformer: new DateTransformer() })
  createdAt: Moment;
}
