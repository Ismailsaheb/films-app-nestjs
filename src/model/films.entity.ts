import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'film' })
export class Film {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ type: 'varchar', name: 'film_name', nullable: true})
  name: string;
  
  @Column({ type: 'varchar', nullable: true,})
  description: string;

  @Column({ type: 'date', name: 'release_date', nullable: true })
  releaseDate: Date

  @Column({ type: 'varchar', nullable: true,})
  rating: string;

  @Column({ type: 'varchar', name: 'ticket_price', nullable: true })
  ticketPrice: string;

  @Column({ type: 'varchar', nullable: true })
  country: string;

  @Column({ type: 'varchar', nullable: true })
  genre: string;

  @Column({ type: 'varchar', nullable: true })
  photo: string;
}
