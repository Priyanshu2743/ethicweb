import { Component, OnInit, ViewChild } from '@angular/core';
import {AnimationService} from '../shared/animation.service';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  @ViewChild("f") fdata:NgForm;
  footerAnim1: object;
  footerAnim4: object;
  footerAnim3: object;
  footerAnim2: object;

  
  constructor(private animService:AnimationService, private http:HttpClient) { }

  ngOnInit() {
    this.footerAnim1=this.animService.footerAnim1;
    this.footerAnim2=this.animService.footerAnim2;
    this.footerAnim3=this.animService.footerAnim3;
    this.footerAnim4=this.animService.footerAnim4;

  }
  onSubmit()
  {
    this.http.post('https://ethiccraft-41131.firebaseio.com/newsletter.json',this.fdata.value).subscribe(response =>
{
  alert(`Submitted Successfully. 
Thanks for your information !
Note this TransactionID :`+response["name"]);
});
this.fdata.reset();
  }

}
