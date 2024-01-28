import { Injectable } from '@nestjs/common';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto } from './dto/CreateUser.dto';

@Injectable()
export class UserService {
	constructor(
		@InjectRepository(User)
		private readonly userRepository: Repository<User>,
	) {}

	async updateUser(email: number, dto: CreateUserDto) {
		await this.userRepository
			.createQueryBuilder()
			.update(User)
			.set(dto)
			.where('email = email', { email })
			.execute();

		return { message: 'Update profile completed successfully.' };
	}

	async getUserCards(email: string) {
		const userCards = await this.userRepository.findOne({
			where: {
				email,
			},
			relations: {
				cards: true,
			},
		});

		return userCards.cards;
	}
}
