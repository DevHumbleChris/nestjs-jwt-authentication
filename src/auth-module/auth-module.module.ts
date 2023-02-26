import { LocalStrategy } from 'src/strategies/local.strategy';
import { AuthService } from './../auth-service/auth-service.service';
import { UsersModule } from './../users/users.module';
import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';

@Module({
  imports: [UsersModule, PassportModule],
  providers: [AuthService, LocalStrategy],
})
export class AuthModuleModule {}
