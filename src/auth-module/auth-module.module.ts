import { jwtContasts } from './../auth/jwt.constants';
import { LocalStrategy } from 'src/strategies/local.strategy';
import { AuthService } from './../auth-service/auth-service.service';
import { UsersModule } from './../users/users.module';
import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    UsersModule,
    PassportModule,
    JwtModule.register({
      secret: jwtContasts.secret,
    }),
  ],
  providers: [AuthService, LocalStrategy],
  exports: [AuthService],
})
export class AuthModuleModule {}
