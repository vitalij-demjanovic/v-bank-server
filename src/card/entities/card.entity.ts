import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { User } from '../../user/entities/user.entity';

@Entity()
export class Card {
	@PrimaryGeneratedColumn()
	id: number;

	@Column()
	balance: number;

	@Column()
	cardNumber: string;

	@ManyToOne(() => User, (user) => user.cards)
	cardHolder: User;

	@Column()
	validMonth: string;

	@Column()
	validYear: string;

	@Column()
	cardName: string;

	@Column()
	bankName: string;
}
