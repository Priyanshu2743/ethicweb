import { ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate } from '@angular/router';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Authenticate } from './authenticate.service';

@Injectable()
export class AuthGaurd implements CanActivate
{
    constructor(private auth:Authenticate){}
    canActivate(route:ActivatedRouteSnapshot, state:RouterStateSnapshot): Observable<boolean> | 
    Promise<boolean> | boolean
    {
   return this.auth.isAuthenticate();
    }
}