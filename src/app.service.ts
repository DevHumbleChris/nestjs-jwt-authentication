/* eslint-disable prettier/prettier */
import { PrismaService } from './prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { Prisma, Friend } from '@prisma/client'

@Injectable()
export class AppService {
  constructor(private prisma: PrismaService){}

  async getFriends(): Promise<Friend[]> {
    return this.prisma.friend.findMany()
  }
}
