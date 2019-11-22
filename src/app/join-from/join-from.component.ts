import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-join-from',
  templateUrl: './join-from.component.html',
  styleUrls: ['./join-from.component.css']
})
export class JoinFromComponent implements OnInit {

  constructor(private http:HttpClient) { }

  ngOnInit() {
  }
  onSubmitForm(formData:any)
  {
    this.http.post('https://ethiccraft-41131.firebaseio.com/joinus.json',formData.value).subscribe(response =>
    {
      alert(`Submitted Successfully. 
    Thanks for your information !
    Note this TransactionID :`+response["name"]);
    });
      
    formData.reset();  
  }
}
