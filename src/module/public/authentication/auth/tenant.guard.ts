import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class TenantGuard implements CanActivate {

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {

    const userTenant = context.getArgs()[0].user.organization;
    console.log(context.getArgs()[0].user);
    
    const tokenTenant = context.getArgs()[0].headers['schema']
    if(userTenant===tokenTenant)
        return true;
    return false;
  }
}