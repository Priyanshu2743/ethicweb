import { Component, ViewChild, OnInit } from "@angular/core";
import { Authenticate } from "../shared/authenticate.service";
import { Router } from "@angular/router";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-adm-login",
  templateUrl: "./adm-login.component.html",
  styleUrls: ["./adm-login.component.css"]
})
export class AdmLoginComponent implements OnInit {
  mode = "dashboard";
  oldPassword: string;
  newPassword: string;
  @ViewChild("f") loggingForm;
  constructor(
    private authService: Authenticate,
    private router: Router,
    private http: HttpClient
  ) {}

  ngOnInit() {
    this.http
      .get("https://ethiccraft-41131.firebaseio.com/key.json")
      .subscribe(data => {
        this.authService.setPassword(data["-LoKF2t2sYFb4gmF9djN"].keyval);
      });
  }
  onLogging() {
    if (
      this.authService.authenticate(
        this.loggingForm.value.username,
        this.loggingForm.value.password
      )
    ) {
      this.router.navigate(["/adminView"]);
    } else {
      alert(`Try Again...
Wrong Credentials !`);
    }
  }
  resetPasswordLink() {
    this.mode = "reset";
  }
  submitResetForm() {
    if (this.authService.resetPassword(this.newPassword, this.oldPassword)) {
      alert(`Password Updated Successfully.`);
      this.mode = "dashboard";
    } else {
      alert(`Wrong Credentials !`);
    }
  }
}
