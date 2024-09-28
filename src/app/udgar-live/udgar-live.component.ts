import { Component, OnInit, AfterViewInit  } from '@angular/core';

@Component({
  selector: 'app-udgar-live',
  templateUrl: './udgar-live.component.html',
  styleUrls: ['./udgar-live.component.css']
})
export class UdgarLiveComponent implements OnInit {

  constructor() { }
  activeIndex = 0;

  ngOnInit() {
  }

  // Tabs Data (Images)
  tabs = [
    { imgSrc: 'https://livedemo00.template-help.com/wt_62267_v8/prod-20823-one-service/images/testimonials-01-179x179.png' },
    { imgSrc: 'https://livedemo00.template-help.com/wt_62267_v8/prod-20823-one-service/images/testimonials-02-306x306.png' },
    { imgSrc: 'https://livedemo00.template-help.com/wt_62267_v8/prod-20823-one-service/images/testimonials-03-179x179.png' }
  ];

  // Testimonials Data
  quotes = [
    {
      text: 'I have tried a lot of food delivery services but Plate is something out of this world! Their food is really healthy and it tastes great, which is why I recommend this company to all my friends!',
      author: 'Peter Lee'
    },
    {
      text: 'Another testimonial text for the second quote. Their services are great!',
      author: 'John Doe'
    },
    {
      text: 'Third testimonial here, this is fantastic!',
      author: 'Jane Smith'
    }
  ];

  onTabClick(index: number) {
    this.activeIndex = index;
  }
}

