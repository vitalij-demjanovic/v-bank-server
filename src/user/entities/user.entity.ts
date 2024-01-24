import { Entity, Column } from 'typeorm';

@Entity()
export class User {
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
}
