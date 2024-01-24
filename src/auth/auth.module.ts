import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthUser } from './entities/auth.entity';
import { AuthService } from './auth.service';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { getJWTConfig } from '../config/jwt.config';
import { PassportModule } from '@nestjs/passport';
import { JwtStratagy } from './strategies/jwt.strategy';

@Module({
	imports: [
		TypeOrmModule.forFeature([AuthUser]),
		ConfigModule,
		JwtModule.registerAsync({
			imports: [ConfigModule],
			inject: [ConfigService],
			useFactory: getJWTConfig,
		}),
		PassportModule,
	],
	controllers: [AuthController],
	providers: [AuthService, JwtStratagy],
})
export class AuthModule {}