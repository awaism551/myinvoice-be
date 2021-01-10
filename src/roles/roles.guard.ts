import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { GqlExecutionContext } from '@nestjs/graphql';
import { ROLES_KEY } from './roles.decorator';
import { Role } from './roles.model';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const requiredRoles = this.reflector.getAllAndOverride<Role[]>(ROLES_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);
    if (!requiredRoles) {
      return true;
    }
    // console.log('roles guard::requiredRoles::', requiredRoles);

    const ctx = GqlExecutionContext.create(context);
    const user = ctx.getContext().req.user;
    // console.log(user?.role?.name);
    if (!user) {
      // it means user is trying to login
      return true;
    }
    // below line logic is applicable if one user can have multiple roles
    // return requiredRoles.some((role) => user?.roles?.includes(role));
    // below logic if one user can have only one role which is in our case
    return requiredRoles.includes(user?.role?.name);
  }
}
