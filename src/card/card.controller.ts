import { Body, Controller, Post, Request, UseGuards } from '@nestjs/common';
import { CardService } from './card.service';
import { JwtAuthGuard } from '../auth/guards/jwt.guard';
import { CreateCardDto } from './dto/createCard.dto';

@Controller('card')
export class CardController {
	constructor(private readonly cartService: CardService) {}

	@UseGuards(JwtAuthGuard)
	@Post('create')
	async create(@Request() req, @Body() dto: CreateCardDto) {
		return this.cartService.createNewCard(req.user, dto);
	}
}
