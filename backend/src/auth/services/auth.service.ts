import { JwtService } from '@nestjs/jwt';
import { Injectable, BadRequestException } from '@nestjs/common';
import { UserService } from 'src/users/services/user.service';
import * as bcrypt from 'bcrypt';
import { IUser } from 'src/types/types';
import { InputType } from '@nestjs/graphql';
import { LoginUserInput } from '../dto/login-user.input';
import { UserEntity } from 'src/users/entities/user.entity';
import { RegisterUserInput } from '../dto/register-user.input';

@InputType()
class LoginArgs {
  email: string;
  password: string;
}
@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  async validateUser(email: string, password: string) {
    const user = await this.userService.findOneByEmail(email);
    const passwordIsMatch = await bcrypt.compare(password, user.password);
    if (user && passwordIsMatch) {
      const { password, ...result } = user;
      return result;
    }
    throw new BadRequestException('User or password are incorrect!');
  }

  async login(user: UserEntity) {
    const { email, id } = user;

    return {
      user,
      token: this.jwtService.sign({ email, id }),
    };
  }
  async register(registerUserInput: RegisterUserInput) {
    const user = await this.userService.findOneByEmail(registerUserInput.email);
    if (user) {
      throw new BadRequestException('This email already in use');
    }

    const response = await this.userService.createUser(registerUserInput);
    console.log('🚀 ~ AuthService ~ register ~ response:', response);

    return response;
  }
}
