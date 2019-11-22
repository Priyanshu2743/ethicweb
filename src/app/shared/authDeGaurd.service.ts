import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';


export interface CanComponentDeactivate
{
    canComponentDeactivate:()=> Observable<boolean> |Promise<boolean> |boolean;
}

export class AuthDeGaurd implements CanDeactivate<CanComponentDeactivate> 
{
    canDeactivate(component:CanComponentDeactivate,route:ActivatedRouteSnapshot, state:RouterStateSnapshot):
    Observable<boolean> | Promise<boolean> | boolean
    {
     return component.canComponentDeactivate();
      
    }
}