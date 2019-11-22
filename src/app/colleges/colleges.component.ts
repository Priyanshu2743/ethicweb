import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-colleges",
  templateUrl: "./colleges.component.html",
  styleUrls: ["./colleges.component.css"]
})
export class CollegesComponent implements OnInit {
  list: string[] = [
    "DTU",
    "NIFTEM",
    "Ramjas",
    "Kirori mal college",
    "NIT - Delhi",
    "Dyal Sigh college(E)",
    "VIPS(IP)",
    "Ambedkar (DU)",

    "Aryabhatta College",
    "Sri Venkateswara college",
    "LPU",
    "Aurobindo College",
    "NIT Patna",
    "Nalanda University",
    "DITE",
    "PGDAV Morning",

    "Punjab University",
    "IIT Delhi",
    "IIT BHU",
    "GL Bajaj",
    "NIT Patna",
    "IIT Mandi",
    "YMCA University",
    "ABES",

    "CPJ College of Law( IP)",
    "Shyama Prasad Mukherjee College",
    "Sunderdeep college",
    "DME Law college",
    "Shaheed Bhagat Singh college",
    "Vaishno College of Engineering",
    "Rudrapur Institute of Tecnology",
    "Apex Institute of Technology"
  ];
  id1: number = 0;
  id2: number = 1;
  id3: number = 2;
  id4: number = 3;
  constructor() {}

  ngOnInit() {
    setInterval(() => {
      if (this.id4 + 1 < this.list.length) {
        this.id1 = this.id1 + 1;
        this.id2 = this.id2 + 1;
        this.id3 = this.id3 + 1;
        this.id4 = this.id4 + 1;
      } else {
        this.id1 = 0;
        this.id2 = 1;
        this.id3 = 2;
        this.id4 = 3;
      }
    }, 5000);
  }
}
