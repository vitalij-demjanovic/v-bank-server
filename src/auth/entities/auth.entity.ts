import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { User } from '../../user/entities/user.entity';

@Entity()
export class AuthUser extends User {
	@PrimaryGeneratedColumn()
	id: number;

	@Column({ unique: true })
	email: string;

	@Column()
	passwordHash: string;
}
