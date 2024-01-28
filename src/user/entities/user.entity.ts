import { Entity, Column, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Card } from '../../card/entities/card.entity';

@Entity()
export class User {
	@PrimaryGeneratedColumn()
	id: number;

	@Column({ unique: true })
	email: string;

	@Column()
	passwordHash: string;

	@Column({ nullable: true })
	firstName: string;

	@Column({ nullable: true })
	lastName: string;

	@Column({ nullable: true })
	address: string;

	@Column({ nullable: true })
	userPhoto: string;

	@Column({ nullable: true })
	role: string;

	@OneToMany(() => Card, (card) => card.cardHolder)
	cards: Card[];
}
