import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class AuthUser {
	@PrimaryGeneratedColumn()
	id: number;

	@Column({ unique: true })
	email: string;

	@Column()
	passwordHash: string;
}
