import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, FormsModule } from '@angular/forms';
import { AuthService } from '../../../shared/services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  providers: [AuthService],
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  private authService = inject(AuthService);
  private router = inject(Router);
  login(){
    this.authService.login(this.username, this.password).subscribe(e => {
      if(e){
        this.router.navigate(['']);
      }
    });
  }
}
