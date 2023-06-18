import { registerEnumType } from '@nestjs/graphql';

export interface IUser {
  id: string;
  email: string;
}

export enum UserRoles {
  ADMIN = 'admin',
  USER = 'user',
}

registerEnumType(UserRoles, {
  name: 'userRoles',
});
