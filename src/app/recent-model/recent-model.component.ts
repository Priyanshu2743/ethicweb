import { Component, OnInit, AfterViewInit } from "@angular/core";
import { ActivatedRoute, Params } from "@angular/router";
declare var $: any;

@Component({
  selector: "app-recent-model",
  templateUrl: "./recent-model.component.html",
  styleUrls: ["./recent-model.component.css"]
})
export class RecentModelComponent implements OnInit, AfterViewInit {
  id: any;
  image: string;
  images: string[] = [
    "assets/img/menu-revents/modal0-1.jpg",
    "assets/img/menu-revents/modal1-2.jpg",
    "assets/img/menu-revents/modal2-1.jpg",
    "assets/img/menu-revents/modal3-3.jpg",
    "assets/img/menu-revents/modal4-1.jpg",
    "assets/img/menu-revents/modal5-1.jpg",
    "assets/img/menu-revents/modal6-1.jpg",
    "assets/img/menu-revents/modal7-1.jpg",
    "assets/img/menu-revents/modal8-1.jpg",
    "assets/img/menu-revents/modal9-1.jpg",
    "assets/img/menu-revents/modal10-1.jpg",
    "assets/img/menu-revents/modal11-1.jpg",
    "assets/img/menu-revents/modal12-1.jpg",
    "assets/img/menu-revents/modal13-1.jpg",
    "assets/img/menu-revents/modal14-1.jpg",
    "assets/img/menu-revents/modal16-1.jpg",
    "assets/img/menu-revents/modal15-1.jpg",
    "assets/img/menu-revents/modal17-1.jpg",
    "assets/img/menu-revents/modal18-1.jpg",
    "assets/img/menu-revents/modal19-1.jpg",
    "assets/img/menu-revents/modal20-1.jpg",
    "assets/img/menu-revents/modal21-1.jpg",
    "assets/img/menu-revents/modal22-1.jpeg",
    "assets/img/menu-revents/modal23-1.jpg",
    "assets/img/menu-revents/modal24-1.jpg",
    "assets/img/menu-revents/modal25-1.jpg",
    "assets/img/menu-revents/modal26-1.jpg",
    "assets/img/menu-revents/modal27-1.jpg",
    "assets/img/menu-revents/modal28-1.jpg",
    "assets/img/menu-revents/modal29-1.jpg",
    "assets/img/Revent/Sankalp1.jpg",
    "assets/img/Revent/MimeAct.jpg",
    "assets/img/Revent/Viplava/4.jpg",
  ];
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = params["id"];
      this.image = this.images[this.id];
      console.log(this.id);
    });
  }
  ngAfterViewInit() {
    $('.carousel[data-type="multi"] .item').each(function() {
      var next = $(this).next();
      if (!next.length) {
        next = $(this).siblings(":first");
      }
      next
        .children(":first-child")
        .clone()
        .appendTo($(this));

      for (var i = 0; i < 2; i++) {
        next = next.next();
        if (!next.length) {
          next = $(this).siblings(":first");
        }

        next
          .children(":first-child")
          .clone()
          .appendTo($(this));
      }
    });
  }
}
