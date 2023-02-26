/* eslint-disable prettier/prettier */
import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from 'src/auth-service/auth-service.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super();
  }

  async validate(userID: string, pass: string): Promise<any> {
    const user = await this.authService.validateUser(userID, pass)
    if (!user) {
        throw new UnauthorizedException()
    }
    return user;
  }
}
