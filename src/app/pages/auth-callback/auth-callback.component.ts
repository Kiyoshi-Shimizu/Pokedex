import { Component, OnInit, inject } from '@angular/core';
import { AuthService } from '../../../shared/services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth-callback',
  standalone: false,
  templateUrl: './auth-callback.component.html',
  styleUrl: './auth-callback.component.scss'
})
export class AuthCallbackComponent implements OnInit{
  isLogged = false;
  private router = inject(Router);
  private auth = inject(AuthService);
  constructor(){
    this.checkSesion();
  }
  ngOnInit(): void {
    this.checkSesion();
  }

  checkSesion(){
    this.auth.isLoggedIn().subscribe(e => this.isLogged = e);
    if(this.isLogged){
      this.router.navigate(['home']);
      return;
    }
    this.router.navigate(['login']);
  }
}
