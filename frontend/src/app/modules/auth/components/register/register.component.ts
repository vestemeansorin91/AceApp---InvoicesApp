import { Component } from '@angular/core';
import { AuthServices } from '../../services/auth.services';

@Component({
  selector: 'ace-register',
  templateUrl: 'register.component.html',
  styleUrls: ['register.component.scss'],
})
export class RegisterComponent {
  public username: string = '';
  public fullName: string = '';
  public email: string = '';
  public password: string = '';
  constructor(private authServices: AuthServices) {}
  public register() {
    this.authServices
      .register(this.username, this.fullName, this.email, this.password)
      .subscribe((response) => {
        console.log(response);
      });
  }
}
