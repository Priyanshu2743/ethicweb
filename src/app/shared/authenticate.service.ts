import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable()
export class Authenticate {
  username = "admin";
  password = "";
  loggedIn: boolean = false;

  constructor(private http: HttpClient) {}

  private login() {
    this.loggedIn = true;
  }
  logout() {
    this.loggedIn = false;
  }

  isAuthenticate() {
    return this.loggedIn;
  }

  authenticate(user: string, pass: string): boolean {
    if (this.username === user && this.password === pass) {
      this.login();
      return true;
    } else {
      return false;
    }
  }
  resetPassword(newPassword: string, oldPassword: string): boolean {
    if (this.password === oldPassword) {
      this.password = newPassword;
      const obj = { keyval: newPassword };
      this.http
        .patch(
          "https://ethiccraft-41131.firebaseio.com/key/-LoKF2t2sYFb4gmF9djNl==ng s.json",
          obj
        )
        .subscribe(response => {
          console.log(response);
        });
      return true;
    } else {
      return false;
    }
  }
  setPassword(pass: string) {
    this.password = pass;
  }
}
