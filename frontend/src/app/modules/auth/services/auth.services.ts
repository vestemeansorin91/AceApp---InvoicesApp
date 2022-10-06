import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class AuthServices {
  constructor(private http: HttpClient) {}

  public register(
    username: string,
    fullName: string,
    email: string,
    password: string
  ) {
    return this.http.post('http://localhost:3000/api/register', {
      username,
      fullName,
      email,
      password,
    });
  }
}
