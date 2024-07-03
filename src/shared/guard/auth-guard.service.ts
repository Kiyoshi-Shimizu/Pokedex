import { Injectable, inject } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, GuardResult, MaybeAsync, RouterStateSnapshot } from "@angular/router";
import { AuthService } from "../services/auth.service";

@Injectable({
    providedIn: 'root'
  })
export class AuthGuardService implements CanActivate{
    private auth = inject(AuthService);
    isLogged = false;
    canActivate(): boolean {
        this.auth.isLoggedIn().subscribe(e => this.isLogged = e);
        if(this.isLogged)
          return true;
        return false;
    }
}