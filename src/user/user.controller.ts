import { Body, Controller, Patch, Request, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { JwtAuthGuard } from '../auth/guards/jwt.guard';
import { CreateUserDto } from './dto/CreateUser.dto';

@Controller('user')
export class UserController {
	constructor(private userService: UserService) {}

	@UseGuards(JwtAuthGuard)
	@Patch('update')
	async update(@Request() req, @Body() dto: CreateUserDto) {
		return this.userService.updateUser(req.user, dto);
	}
}
