import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-event-popup',
  templateUrl: './app-event-popup.component.html',
  styleUrls: ['./app-event-popup.component.css']
})
export class AppEventPopupComponent {
  isVisible: boolean = false; // Initialize the popup visibility

  @HostListener('window:scroll', [])
  onWindowScroll(): void { // Return type must be 'void'
    const sliderElement = document.querySelector('app-home-slider'); // Ensure selector is valid
    const sliderHeight = sliderElement ? sliderElement.getBoundingClientRect().bottom : 0;

    // Check if the scroll passed the bottom of the slider component
    if (window.pageYOffset > sliderHeight) {
      this.isVisible = true; // Show popup
    } else {
      this.isVisible = false; // Hide popup if scrolled back up
    }
  }

  closePopup(): void {
    this.isVisible = false; // Close popup on button click
  }
}
