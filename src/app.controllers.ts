/* eslint-disable prettier/prettier */
import { User } from '@prisma/client';
import { Controller, Get, Post, HttpCode, Body, UseGuards, Request } from '@nestjs/common';
import { UsersService } from './users/users.service';
import { LocalAuthGuard } from './auth/local-auth.guard';
import { AuthService } from './auth-service/auth-service.service';

@Controller('api-test')
export class AppController {
  constructor(private app: UsersService, private authService: AuthService) {}

  @Post('create-user')
  @HttpCode(200)
  async createNewUSer(@Body() data: User): Promise<User> {
    return this.app.createUser(data)
  }

  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  async login(@Request() req) {
    return this.authService.login(req.user)
  }

  @Get('users')
  async allUsers(): Promise<User[] | null> {
    return this.app.findAllUsers()
  }
}
