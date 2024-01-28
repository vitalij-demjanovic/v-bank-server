import { Module } from '@nestjs/common';
import { CardService } from './card.service';
import { CardController } from './card.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Card } from './entities/card.entity';
import { AuthModule } from '../auth/auth.module';
import { UserModule } from '../user/user.module';

@Module({
	imports: [TypeOrmModule.forFeature([Card]), AuthModule, UserModule],
	providers: [CardService],
	controllers: [CardController],
})
export class CardModule {}
