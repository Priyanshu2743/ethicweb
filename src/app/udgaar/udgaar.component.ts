import { Component, OnInit } from '@angular/core';
// import { FormGroup, FormControl, Validators } from '@angular/forms';
// import { DataService } from './data.service'; // Add import statement
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-udgaar',
  templateUrl: './udgaar.component.html',
  styleUrls: ['./udgaar.component.css']
})
export class UdgaarComponent implements OnInit {

  // participantForm = new FormGroup({
  //   FName: new FormControl('', Validators.required),
  //   LName: new FormControl('', Validators.required),
  //   // Add other form controls as needed
  // });

  Fname: string= "";
  Lname: string= "";
  email: string= "";
  phone: string= "";
  gender: string= "";
  course: string= "";
  year:string="";
  connection: string="";
  college_id:string="";

  // constructor (private dataService: DataService) { } // Use @Inject decorator or providedIn: 'root' in DataService
  constructor (private http: HttpClient) { } // Use @Inject decorator or providedIn: 'root' in DataService

  register(){
    let bodyData = {
      "Fname": this.Fname,
      "Lname": this.Lname,
      "email": this.email,
      "phone": this.phone,
      "gender": this.gender,
      "course": this.course,
      "year": this.year,
      "connection": this.connection,
      "college_id": this.college_id,
    };
    this.http.post("http://localhost:3000/lokesh", bodyData, {responseType: 'text'}).subscribe((resultData: any)=> {
      console.log(resultData);
      alert("Registered Successfully");
    }, (error: any) => {
      console.log(bodyData);
      console.error(error);
      alert("Error registering user: " + error.message);
    });
  }

  ngOnInit(): void {
  }

  onSubmit() {
  }
}