import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { JwtService } from '@nestjs/jwt';
@Injectable()
export class AuthService {
  constructor(private users: UsersService, private jwtService: JwtService) {}

  async validateUser(userID: string, password: string): Promise<any> {
    const user = await this.users.findOne({
      userID,
    });
    console.log(user, 'auth service');
    if (user && user.password === password) {
      return user;
    }
    return null;
  }

  async login(user: any) {
    const payload = { username: user.username, sub: user.userID };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
