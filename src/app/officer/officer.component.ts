import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-officer',
  templateUrl: './officer.component.html',
  styleUrls: ['./officer.component.css']
})
export class OfficerComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  onJoin()
  {
this.router.navigate(['executive','officer']);
  }

}
