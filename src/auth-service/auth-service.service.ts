import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
  constructor(private users: UsersService) {}

  async validateUser(userID: string, password: string): Promise<any> {
    const user = await this.users.findOne({
      userID,
    });
    console.log(user, 'Ni hapa auth service');
    if (user && user.password === password) {
      return user;
    }
    return null;
  }
}
