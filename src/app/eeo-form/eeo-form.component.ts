import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-eeo-form',
  templateUrl: './eeo-form.component.html',
  styleUrls: ['./eeo-form.component.css']
})
export class EeoFormComponent implements OnInit {
joinForm:FormGroup;
  constructor(private http:HttpClient) { }

  ngOnInit() {
    this.joinForm=new FormGroup({
      'fname':new FormControl(null,Validators.required),
      'lname':new FormControl(null),
      'contact':new FormControl(null,Validators.required),
      'email':new FormControl(null,[Validators.required,Validators.email]),
      'college':new FormControl(null,Validators.required),
      'memberId':new FormControl(null,Validators.required),
      'reason':new FormControl(null),
      'contribution':new FormControl(null),
      'reference':new FormControl(null)
    });
  }

  onFormSubmit()
  {
    this.http.post('https://ethiccraft-41131.firebaseio.com/eeo.json',this.joinForm.value).subscribe(response =>
    {
      alert(`Submitted Successfully. 
    Thanks for your information !
    Note this TransactionID :`+response["name"]);
    });
      
    this.joinForm.reset();  
  }

}
