/* eslint-disable prettier/prettier */
import { PrismaService } from './prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { Prisma, User } from '@prisma/client'

@Injectable()
export class AppService {
  constructor(private prisma: PrismaService){}

  async createUser(data: Prisma.UserCreateInput): Promise<User> {
    return this.prisma.user.create({
      data
    })
  }
}
