import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
  constructor(private users: UsersService) {}

  async validateUser(userID: string, pass: string): Promise<any> {
    const user = await this.users.findOne({
      userID,
    });
    console.log(user);
    if (user && user.password === pass) {
      return user;
    }
    return null;
  }
}
