/* eslint-disable prettier/prettier */
import { Friend } from '@prisma/client';
import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private app: AppService) {}

  @Get()
  async getHello(): Promise<Friend[]> {
    return this.app.getFriends()
  }
}
