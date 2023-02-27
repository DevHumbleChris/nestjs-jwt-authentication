/* eslint-disable prettier/prettier */
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from './prisma/prisma.service';
import { Module } from '@nestjs/common';
import { AppController } from './app.controllers';
import { AppService } from './app.service';
import { AuthModuleModule } from './auth-module/auth-module.module';
import { AuthService } from './auth-service/auth-service.service';
import { UsersModule } from './users/users.module';
@Module({
  controllers: [AppController],
  providers: [AppService, PrismaService, AuthService, JwtService],
  imports: [AuthModuleModule, UsersModule],
})
export class AppModule {}
