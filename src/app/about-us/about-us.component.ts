import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import {Title, Meta} from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {
  title = "About Ethiccraft";
  constructor(
    public router: Router,
    private titleService: Title,
    private meta: Meta  
    ){}
    ngOnInit(){
      this.titleService.setTitle(this.title);
      this.meta.addTag({name: 'author', content: 'rsgitech'}); 
      this.meta.addTag({name: 'robots', content: 'index, follow'}); 
      this.meta.updateTag({name: 'keywords', content: 'HRD Minister lonched, our team, president message'});
      this.meta.updateTag({name: 'discription', content: 'about Ethiccraft club'});
    }

}
