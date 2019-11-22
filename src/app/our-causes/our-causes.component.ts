import { Component, ElementRef, ViewChild, QueryList, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-our-causes',
  templateUrl: './our-causes.component.html',
  styleUrls: ['./our-causes.component.css']
})
export class OurCausesComponent  {

  @ViewChild('overlay') overlay:ElementRef;
  @ViewChildren('content') detail:QueryList<ElementRef>;
  select:number;


 onCauses(i:number)
 {
   this.select=i;
   this.overlay.nativeElement.classList.add('active');
   this.detail.toArray()[i].nativeElement.classList.add('active');
 }

 onclose()
 {
  this.overlay.nativeElement.classList.remove('active');
  this.detail.toArray()[this.select].nativeElement.classList.remove('active');
 }
}
