import { Component, OnInit, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";
import { HttpClient } from '@angular/common/http';

@Component({
  selector: "app-stay-tune",
  templateUrl: "./stay-tune.component.html",
  styleUrls: ["./stay-tune.component.css"]
})
export class StayTuneComponent implements OnInit {
  @ViewChild("f") signUp: NgForm;
  constructor(private http:HttpClient) {}

  ngOnInit() {}
  onSignUp() {
    this.http.post('https://ethiccraft-41131.firebaseio.com/stayTune.json',this.signUp.value).subscribe(response =>
{
  alert(`Submitted Successfully. 
Thanks for your information !
Note this TransactionID :`+response["name"]);
});

this.signUp.reset();
  }
}
