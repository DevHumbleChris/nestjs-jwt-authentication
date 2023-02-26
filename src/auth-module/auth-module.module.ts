import { AuthService } from './../auth-service/auth-service.service';
import { UsersModule } from './../users/users.module';
import { Module } from '@nestjs/common';

@Module({
  imports: [UsersModule],
  providers: [AuthService],
})
export class AuthModuleModule {}
