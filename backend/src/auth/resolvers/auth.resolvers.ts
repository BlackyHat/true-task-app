import { Resolver, Mutation, Args, Context, Query } from '@nestjs/graphql';
import { UseGuards } from '@nestjs/common';
import { AuthService } from '../services/auth.service';
import { LoginUserInput } from '../dto/login-user.input';
import { GqlAuthGuard } from '../guards/gql-auth.guard';
import { LoginResponse } from '../dto/login-response.dto';
import { UserEntity } from 'src/users/entities/user.entity';
import { RegisterUserInput } from '../dto/register-user.input';
import { RegisterResponse } from '../dto/register-response.dto';

@Resolver('Auth')
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}

  @Mutation(() => LoginResponse, { name: 'login' })
  @UseGuards(GqlAuthGuard)
  async login(
    @Args('loginUserInput') loginUserInput: LoginUserInput,
    @Context() context,
  ): Promise<LoginResponse> {
    return this.authService.login(context.user);
  }

  @Mutation(() => RegisterResponse, { name: 'register' })
  register(
    @Args('registerUserInput') registerUserInput: RegisterUserInput,
  ): Promise<RegisterResponse> {
    return this.authService.register(registerUserInput);
  }

  @Query(() => UserEntity, { name: 'profile' })
  @UseGuards(GqlAuthGuard)
  async getProfile(@Context() context): Promise<UserEntity> {
    return context.req.user;
  }
}
