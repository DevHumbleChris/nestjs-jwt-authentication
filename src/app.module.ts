/* eslint-disable prettier/prettier */
import { PrismaService } from './prisma/prisma.service';
import { Module } from '@nestjs/common';
import { AppController } from './app.controllers';
import { AppService } from './app.service';
@Module({
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
