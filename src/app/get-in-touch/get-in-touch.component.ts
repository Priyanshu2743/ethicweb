import { Component, OnInit, ViewChild } from "@angular/core";
import { AnimationService } from "../shared/animation.service";
import { NgForm, NgModel, AbstractControl, FormControl } from "@angular/forms";
import { HttpClient } from '@angular/common/http';
import { DatePipe } from '@angular/common';

@Component({
  selector: "app-get-in-touch",
  templateUrl: "./get-in-touch.component.html",
  styleUrls: ["./get-in-touch.component.css"],
  providers: [DatePipe]
})
export class GetInTouchComponent implements OnInit {
  @ViewChild("f") fdata: NgForm;
  animAddress: object;
  animForm: object;
  getin: object;
  question: object;
  mydate: String;

  constructor(private animService: AnimationService, private http:HttpClient, public datepipe:DatePipe) {}

  ngOnInit() {
    this.animAddress = this.animService.footerAnim3;
    this.animForm = this.animService.footerAnim4;
    this.getin = this.animService.footerAnim1;
    this.question = this.animService.footerAnim2;
  }
  onFormSubmit() {
this.mydate = this.datepipe.transform(Date.now(), 'yyyy-MM-dd');
this.fdata.form.addControl("applyOn", new FormControl());
this.fdata.controls['applyOn'].setValue(this.mydate);
this.http.post('https://ethiccraft-41131.firebaseio.com/getintouch.json',this.fdata.value).subscribe(response =>
{
  alert(`Submitted Successfully. 
Thanks for your information !
Note this TransactionID :`+response["name"]);
});
 this.fdata.reset();  
  }
}
