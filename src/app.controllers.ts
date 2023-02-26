/* eslint-disable prettier/prettier */
import { User } from '@prisma/client';
import { Controller, Get, Post, HttpCode, Body } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('api-test')
export class AppController {
  constructor(private app: AppService) {}

  @Post('create-user')
  @HttpCode(200)
  async createNewUSer(@Body() data: User): Promise<User> {
    return this.app.createUser(data)
  }

  @Get()
  getHello(): string {
    return 'hello'
  }
}
