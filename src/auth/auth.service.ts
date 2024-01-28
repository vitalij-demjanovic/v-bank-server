import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { compare, genSalt, hash } from 'bcryptjs';
import { AuthDto } from './dto/auth.dto';
import { JwtService } from '@nestjs/jwt';
import { USER_NOT_FOUND_ERROR, WRONG_PASSWORD_ERROR } from './auth.constans';
import { User } from '../user/entities/user.entity';

@Injectable()
export class AuthService {
	constructor(
		@InjectRepository(User)
		private readonly authorizationRepository: Repository<User>,
		private readonly jwtService: JwtService,
	) {}

	async createUser(dto: AuthDto) {
		const salt = await genSalt(10);
		const newUser = {
			email: dto.email,
			passwordHash: await hash(dto.password, salt),
		};

		return this.authorizationRepository.save(newUser);
	}
	async findUser(email: string) {
		return this.authorizationRepository.findOne({ where: { email } });
	}

	async validateUser(login: string, password: string) {
		const user = await this.findUser(login);
		if (!user) {
			throw new UnauthorizedException(USER_NOT_FOUND_ERROR);
		}

		const isCorrectPassword = await compare(password, user.passwordHash);
		if (!isCorrectPassword) {
			throw new UnauthorizedException(WRONG_PASSWORD_ERROR);
		}

		return { login: user.email };
	}

	async login(email: string) {
		const payload = { email };
		return {
			access_token: await this.jwtService.signAsync(payload),
		};
	}
}
