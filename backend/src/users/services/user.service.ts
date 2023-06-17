import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from 'src/users/entities/user.entity';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { RegisterUserInput } from 'src/auth/dto/register-user.input';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
    private readonly jwtService: JwtService,
  ) {}

  async createUser(user: RegisterUserInput) {
    const newUser = await this.userRepository.save({
      email: user.email,
      password: await bcrypt.hash(user.password, 10),
    });
    delete user.password;
    const token = this.jwtService.sign({
      email: newUser.email,
      id: newUser.id,
    });

    return { user: newUser, token };
  }

  async findOneByEmail(email: string): Promise<UserEntity | undefined> {
    const user = await this.userRepository.findOne({ where: { email } });
    return user;
  }
}
