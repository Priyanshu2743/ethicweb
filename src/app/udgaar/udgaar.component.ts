import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-udgaar',
  templateUrl: './udgaar.component.html',
  styleUrls: ['./udgaar.component.css']
})
export class UdgaarComponent implements OnInit, OnDestroy {
  Fname: string = "";
  Lname: string = "";
  email: string = "";
  phone: string = "";
  gender: string = "";
  course: string = "";
  year: string = "";
  connection: string = "";
  college_id: string = "";

  private sub: any;

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
    this.resetForm(); // Initial form reset

    // Subscribe to router events to reset the form on navigation
    this.sub = this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      if (this.router.url === '/udgaar') { // Adjust the path as needed
        this.resetForm();
      }
    });
  }

  ngOnDestroy() {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }

  validateAndRegister() {
    const emailPattern = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    const phonePattern = /^[0-9]{10}$/;

    if (!this.Fname || !this.Lname) {
      alert('Please provide both first name and last name.');
      return;
    }

    if (!emailPattern.test(this.email)) {
      alert('Please provide a valid email address.');
      return;
    }

    if (!phonePattern.test(this.phone)) {
      alert('Please provide a valid phone number (10 digits).');
      return;
    }

    if (!this.gender || !this.course || !this.college_id) {
      alert('Please fill out all required fields.');
      return;
    }

    this.register();
  }

  register() {
    let bodyData = {
      Fname: this.Fname,
      Lname: this.Lname,
      email: this.email,
      phone: this.phone,
      gender: this.gender,
      course: this.course,
      year: this.year,
      connection: this.connection,
      college_id: this.college_id,
    };

    this.http.post("http://localhost:3000/lokesh", bodyData, { responseType: 'text' })
      .subscribe(
        (resultData: any) => {
          console.log(resultData);
          alert("User registered successfully!");
          this.redirectToPayment();
        },
        (error: any) => {
          console.error(error);
          alert
          ("Error registering user: " + error.message);
        }
      );
  }

  redirectToPayment() {
    // Use window.location.href carefully, as it will reload the page
    window.location.href = 'https://rzp.io/l/UDGAAR';
  }

  resetForm() {
    this.Fname = "";
    this.Lname = "";
    this.email = "";
    this.phone = "";
    this.gender = "";
    this.course = "";
    this.year = "";
    this.connection = "";
    this.college_id = "";
  }
}
