import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ambassador',
  templateUrl: './ambassador.component.html',
  styleUrls: ['./ambassador.component.css']
})
export class AmbassadorComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  onJoin()
  {
this.router.navigate(['campus','ambassador']);
  }

}
