import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { UserEntity } from '../entities/user.entity';
import { UserService } from '../services/user.service';
import { CreateUserDto } from '../dto/create-user.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('register')
  @UsePipes(new ValidationPipe())
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.createUser(createUserDto);
  }

  @Get()
  findOne(@Param('email') email: string): Promise<UserEntity> {
    return this.userService.findOneByEmail(email);
  }

  // @Get(':id')
  // async getAllUser(): Promise<UserEntity[]> {
  //     return awwait this.userService.getAllUser()
  // }
}
