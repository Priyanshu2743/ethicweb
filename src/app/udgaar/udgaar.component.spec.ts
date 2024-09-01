import { Component, OnInit } from '@angular/core';
// import { DataService } from './data.service'; // Corrected import statement
// import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'udgar',
  templateUrl: './udgaar.component.html',
  styleUrls: ['./udgaar.component.css']
})
export class UdgaarComponent implements OnInit {
  // participantForm: FormGroup;

  // constructor(private dataService: DataService) { }

  ngOnInit(): void {
    // this.participantForm = new FormGroup({
    //   'name': new FormControl('', Validators.required),
    //   'email': new FormControl('', Validators.required),
    //   'phone': new FormControl('', Validators.required),
    //   'address': new FormControl('', Validators.required),
    // });
  }

  onSubmit() {
    // if (this.participantForm.valid) {
    //   this.dataService.postFormData(this.participantForm.value).subscribe(response => {
    //     console.log(response);
    //   }, error => {
    //     console.log(error);
    //   });
    // }
  }
}