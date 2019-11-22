import {
  Component,
  ViewChildren,
  ElementRef,
  QueryList,
  AfterViewInit,
  OnInit
} from "@angular/core";
import { AnimationService } from "../shared/animation.service";

@Component({
  selector: "app-testinomial",
  templateUrl: "./testinomial.component.html",
  styleUrls: ["./testinomial.component.css"]
})
export class TestinomialComponent implements AfterViewInit, OnInit {
  @ViewChildren("slides") slides: QueryList<ElementRef>;
  @ViewChildren("dots") dots: QueryList<ElementRef>;
  slideIndex: number = 1;
  heading: object;

  constructor(private animService: AnimationService) {}

  ngOnInit() {
    this.heading = this.animService.footerAnim3;
  }

  ngAfterViewInit() {
    this.showSlides(this.slideIndex);
    setInterval(() => {
      this.showSlides((this.slideIndex += 1));
    }, 8000);
  }

  showSlides(n: number) {
    if (n > this.slides.length) {
      this.slideIndex = 1;
    }
    if (n < 1) {
      this.slideIndex = this.slides.length;
    }
    this.slides.forEach(slide => (slide.nativeElement.style.display = "none"));
    this.dots.forEach(dot => dot.nativeElement.classList.remove("active"));

    this.slides.toArray()[this.slideIndex - 1].nativeElement.style.display =
      "block";
    this.dots.toArray()[this.slideIndex - 1].nativeElement.className +=
      " active";
  }

  plusSlides(n: number) {
    this.showSlides((this.slideIndex += n));
  }

  currentSlide(n: number) {
    this.showSlides((this.slideIndex = n));
  }
}
