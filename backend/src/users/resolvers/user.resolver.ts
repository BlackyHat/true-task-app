// import { Resolver, Mutation, Args, ObjectType, Field } from '@nestjs/graphql';
// import { UserService } from '../services/user.service';
// import { UserEntity } from '../entities/user.entity';
// import { CreateUserInput } from '../inputs/create-user.input';


// @Resolver('Users')
// export class UserResolver {
//   constructor(private readonly userSevice: UserService) {}

//   @Mutation(() => CreateUserResponse)
//   async register(
//     @Args('createUser') createUserInput: CreateUserInput,
//   ): Promise<CreateUserResponse> {
//     return await this.userSevice.createUser(createUserInput);
//   }


//  @RolesRequired(ROLES.ADMIN, ROLES.SUPER_ADMIN)
// import { SetMetadata } from '@nestjs/common';

// import {
//   Injectable, CanActivate, ExecutionContext, UnauthorizedException
// } from '@nestjs/common';
// import { Observable } from 'rxjs';
// import { Reflector } from '@nestjs/core';
// import { GqlExecutionContext } from '@nestjs/graphql';

// @Injectable()
// export class RolesGuard implements CanActivate {
//   constructor(private readonly _reflector: Reflector) {}

//   canActivate(context: ExecutionContext):  boolean | Promise<boolean> | Observable<boolean> {

//     const ctx = GqlExecutionContext.create(context);
//     const req = ctx.getContext().req;

//     const roles: string[] = this._reflector.get<string[]>('roles', context.getHandler());

//     if (!roles) return true;

//     const hasRole = (): boolean => req.user.roles.some((role: string) => roles.includes(role));

//     if (req.user && req.user.roles && hasRole()) {
//       return true;
//     } else {
//       throw new UnauthorizedException();
//     }
//   }
// }

// export const RolesRequired = (...roles: string[]) =>
//   SetMetadata('roles', roles);
