import { Component } from "@angular/core";
import { AnimationService } from "./shared/animation.service";
import { ExcelService } from "./shared/excel.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
  providers: [AnimationService, ExcelService]
})
export class AppComponent {
  title = "ethiccraft";
}
