import { Component, OnInit, ViewChild } from "@angular/core";
import { AnimationService } from "../shared/animation.service";
import { NgForm } from "@angular/forms";
import { HttpClient } from '@angular/common/http';

@Component({
  selector: "app-get-in-touch",
  templateUrl: "./get-in-touch.component.html",
  styleUrls: ["./get-in-touch.component.css"]
})
export class GetInTouchComponent implements OnInit {
  @ViewChild("f") fdata: NgForm;
  animAddress: object;
  animForm: object;
  getin: object;
  question: object;

  constructor(private animService: AnimationService, private http:HttpClient) {}

  ngOnInit() {
    this.animAddress = this.animService.footerAnim3;
    this.animForm = this.animService.footerAnim4;
    this.getin = this.animService.footerAnim1;
    this.question = this.animService.footerAnim2;
  }
  onFormSubmit() {
this.http.post('https://ethiccraft-41131.firebaseio.com/getintouch.json',this.fdata.value).subscribe(response =>
{
  alert(`Submitted Successfully. 
Thanks for your information !
Note this TransactionID :`+response["name"]);
});
  
  this.fdata.reset();  
  }
}
