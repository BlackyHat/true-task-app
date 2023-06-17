import { ObjectType } from '@nestjs/graphql';
import { LoginResponse } from './login-response.dto';

@ObjectType()
export class RegisterResponse extends LoginResponse {}
