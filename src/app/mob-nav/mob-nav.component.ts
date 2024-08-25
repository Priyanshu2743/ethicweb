import { Component, OnInit, EventEmitter, Output } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-mob-nav",
  templateUrl: "./mob-nav.component.html",
  styleUrls: ["./mob-nav.component.css"]
})
export class MobNavComponent implements OnInit {
  listState: boolean = false;
  listNo: number = 0;
  @Output() closeNav = new EventEmitter<void>();
  constructor(private router: Router) {}

  ngOnInit() {}
  onAddOption(lno: number) {
    this.listState = !this.listState;
    this.listNo = lno;
  }
  onNavigate(option: string) {
    this.closeNav.emit();
    switch (option) {
      case "home":
        this.router.navigate(["/home"]);
        break;
      case "about":
        this.router.navigate(["/about"]);
        break;
      case "education":
        this.router.navigate(["/education & training"]);
        break;
      case "recent":
        this.router.navigate(["/recent events"]);
        break;
      case "overview":
        this.router.navigate(["/overview"]);
        break;
      case "members":
        this.router.navigate(["/members"]);
        break;
      case "amba":
        this.router.navigate(["/ambassador"]);
        break;
      case "college-home":
        this.router.navigate(["/college-home"]);
        break;
      case "officer":
        this.router.navigate(["/officer"]);
        break;
    }
  }
}
