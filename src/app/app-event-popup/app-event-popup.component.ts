import { Component, HostListener, ElementRef, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-event-popup',
  templateUrl: './app-event-popup.component.html',
  styleUrls: ['./app-event-popup.component.css']
})
export class AppEventPopupComponent implements AfterViewInit {
  isVisible: boolean = true; // Initialize the popup visibility
  sliderHeight: number = 0;

  // @ViewChild('homeSlider', { static: false }) homeSlider!: ElementRef;

  ngAfterViewInit(): void {
    this.updateSliderHeight(); // Set the sliderHeight after the view is initialized
  }

  // @HostListener('window:scroll', [])
  // onWindowScroll(): void { 
  //   if (window.pageYOffset > this.sliderHeight) {
  //     this.isVisible = true; // Show popup
  //   } else {
  //     this.isVisible = false; // Hide popup if scrolled back up
  //   }
  // }

  updateSliderHeight(): void {
    // if (this.homeSlider) {
    //   this.sliderHeight = this.homeSlider.nativeElement.getBoundingClientRect().bottom;
    // }
  }

  closePopup(): void {
    this.isVisible = false; // Close popup on button click
  }
}
