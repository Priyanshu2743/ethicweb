import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-ca-form',
  templateUrl: './ca-form.component.html',
  styleUrls: ['./ca-form.component.css']
})
export class CaFormComponent implements OnInit {
  formData:FormGroup;
  constructor(private http:HttpClient) { }

  ngOnInit() {
    this.formData=new FormGroup({
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
    this.http.post('https://ethiccraft-41131.firebaseio.com/ca.json',this.formData.value).subscribe(response =>
    {
      alert(`Submitted Successfully. 
    Thanks for your information !
    Note this TransactionID :`+response["name"]);
    });
      
    this.formData.reset();  
  }

}
