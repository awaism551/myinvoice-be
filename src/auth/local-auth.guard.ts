import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class LocalAuthGuard extends AuthGuard('local') implements CanActivate {
  constructor() {
    super();
  }

  async canActivate(context: ExecutionContext): Promise<boolean> {
    // console.log('local-auth.guard::canActivate::');

    await super.canActivate(context);
    const ctx = GqlExecutionContext.create(context);
    const request = ctx.getContext();
    request.body = ctx.getArgs();
    return true;
  }

  getRequest(context: ExecutionContext) {
    // fun required in login procedure
    const ctx = GqlExecutionContext.create(context);
    const request = ctx.getContext();
    request.body = ctx.getArgs();
    // console.log('local-auth.guard::getRequest::ctx.getInfo()::', ctx.getInfo());
    return request;
  }

  //   getRequest(context: ExecutionContext) {
  //     const ctx = GqlExecutionContext.create(context);
  //     return ctx.getContext().req;
  //   }
}
