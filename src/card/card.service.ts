import { Injectable } from '@nestjs/common';
import { Card } from './entities/card.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateCardDto } from './dto/createCard.dto';
import { AuthService } from '../auth/auth.service';

@Injectable()
export class CardService {
	constructor(
		@InjectRepository(Card)
		private readonly cardRepository: Repository<Card>,
		private readonly authService: AuthService,
	) {}
	async createNewCard(email: string, dto: CreateCardDto) {
		const user = await this.authService.findUser(email);
		if (!user) {
			throw Error('This user not exist');
		}
		return await this.cardRepository.save({
			...dto,
			cardHolder: user,
		});
	}
}
