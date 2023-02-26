/* eslint-disable prettier/prettier */
import { User } from '@prisma/client';
import { Controller, Get, Post, HttpCode, Body, UseGuards, Request } from '@nestjs/common';
import { UsersService } from './users/users.service';
import { AuthGuard } from '@nestjs/passport';

@Controller('api-test')
export class AppController {
  constructor(private app: UsersService) {}

  @Post('create-user')
  @HttpCode(200)
  async createNewUSer(@Body() data: User): Promise<User> {
    return this.app.createUser(data)
  }

  @UseGuards(AuthGuard('local'))
  @Post('auth/login')
  async login(@Request() req) {
    return req.user
  }

  @Get('users')
  async allUsers(): Promise<User[] | null> {
    return this.app.findAllUsers()
  }
}
