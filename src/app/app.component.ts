import { Component, OnInit } from "@angular/core";
import { AnimationService } from "./shared/animation.service";
import { ExcelService } from "./shared/excel.service";
import {Title, Meta} from "@angular/platform-browser";
import { Router } from '@angular/router';

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
  providers: [AnimationService, ExcelService]
})
export class AppComponent implements OnInit {
  title = "Ethiccraft";
  constructor(
    public router: Router,
    private titleService: Title,
    private meta: Meta
    ){}
    ngOnInit(){
      this.titleService.setTitle(this.title);
      this.meta.addTag({name: 'author', content: 'rsgitech'}); 
      this.meta.addTag({name: 'robots', content: 'index, follow'}); 
      this.meta.updateTag({name: 'keywords', content: 'Value education, club'});
      this.meta.updateTag({name: 'discription', content: 'Marching Towords Values'});
    }
}
