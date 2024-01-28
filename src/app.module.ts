import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './database/database.module';
import { AuthModule } from './auth/auth.module';
import { CardModule } from './card/card.module';

@Module({
	imports: [
		ConfigModule.forRoot({ isGlobal: true }),
		UserModule,
		DatabaseModule,
		AuthModule,
		CardModule,
	],
	controllers: [AppController],
	providers: [AppService],
})
export class AppModule {}
