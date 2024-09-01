import { Component, ElementRef, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  modal: any;

  constructor(private elementRef: ElementRef) { }

  ngOnInit(): void {
    this.modal = this.elementRef.nativeElement.querySelector('#id01');
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: any): void {
    if (event.target === this.modal) {
      this.modal.style.display = 'none';
    }
  }
}