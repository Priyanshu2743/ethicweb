import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { AnimationService } from '../shared/animation.service';
import { NgsRevealService } from 'ngx-scrollreveal';

@Component({
  selector: 'app-whyjoin',
  templateUrl: './whyjoin.component.html',
  styleUrls: ['./whyjoin.component.css']
})
export class WhyjoinComponent implements OnInit {
  @ViewChild('globe')globe:ElementRef;
ht='0%';
afterRevealSubscription;
afterResetSubscription;
start:object;
lefttop:object;
leftbottom:object;
righttop:object;
rightbottom:object;
  constructor(private animService:AnimationService, private revealService: NgsRevealService) { }

  ngOnInit() {
    this.start=this.animService.whyjoin;
    this.lefttop=this.animService.lefttop;
    this.righttop=this.animService.righttop;
    this.leftbottom=this.animService.leftbottom;
    this.rightbottom=this.animService.rightbottom;
    this.afterRevealSubscription = this.revealService.afterReveal$.subscribe(
      (el: HTMLElement) => {
       if(`${el.className}`==='topright')
       {
     this.ht='20%';
     this.globe.nativeElement.style.scale=1;
     this.globe.nativeElement.style.opacity=1;
    setTimeout(()=>
    {
      this.ht='100%';
    },650);

     

       }
      });

      this.afterResetSubscription = this.revealService.afterReset$.subscribe(
        (el: HTMLElement) => {
          if(`${el.className}`==='bottomright')
          {
       
          this.globe.nativeElement.style.scale=0;
        this.globe.nativeElement.style.opacity=0;
        this.ht='0%';
          }
      });
  }


  ngOnDestroy()
  {
    this.afterRevealSubscription.unsubscribe();
  }
  vlength()
  {
    return this.ht;
  }
}
