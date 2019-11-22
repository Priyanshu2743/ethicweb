import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-objectives",
  templateUrl: "./objectives.component.html",
  styleUrls: ["./objectives.component.css"]
})
export class ObjectivesComponent implements OnInit {
  images: string[] = [
    "assets/img/objectives/obj-1.png",
    "assets/img/objectives/obj-2.png",
    "assets/img/objectives/obj-3.jpg",
    "assets/img/objectives/obj-4.png",
    "assets/img/objectives/obj-5.png",
    "assets/img/objectives/obj-6.png",
    "assets/img/objectives/obj-7.png",
    "assets/img/objectives/obj-8.jpg",
    "assets/img/objectives/obj-9.jpg",
    "assets/img/objectives/obj-10.jpg"
  ];

  contents: string[] = [
    "All of us have the inherent goodness in our personality. Many times,due to lack of a proper platform for expression and lack ofinspiration, goodness is put on the back foot. This club is aplatform for goodness expression.",

    "Values are the priceless jewels which embellish the personality of a human being. Values provide the much-needed meaning to life therefore every act directed towards adding even an iota of value in the life is a transformational effort.",

    "Association has a very important role in shaping the character and destiny of an individual. This is because of the fact that association is a channel for knowledge transmission which results in thoughtful discussions subsequently leading to hear transformation.",

    "In order to become a constructive personality, along with knowledge a person need support and favourable ambience. Such ambience and support become the driving force to help one embark on the path of success.",

    "Every individual has his own set of needs, interests and concerns which result in different sets of permutations and combinations of goals that one desires to achieve and obstacles which obstruct his path of success. For handling such situation, one needs personalized guidance and mentorship.",
    "Due to lack of training and ego-centric attitude, modern people find it easy to work as an individual but not as a team. Regular value based activities and discussions help people come together for a common cause.",
    "Education through cultural rehabilitation (creating an atmosphere to facilitate natural and standard system of value education.",
    "Training and education to make youth responsible citizens of the country. Responsible citizens are the intangible assets of the country which help the nation excel in all facets of development.",
    "A perfect balance of Physical Quotient, Intelligence Quotient, Emotional quotient and spiritual quotient is the much needed pre-requisite for a healthy life in the modern times.",
    "Creating exemplary youth leaders for the society who may proliferate the development of new frontiers to create new opportunities and avenues."
  ];

  headings: string[] = [
    "Platform for Expressing Goodness",
    "Association",
    "Support System",
    "Personalized Mentorship",
    "Community Building",
    "Preserving Culture",
    "Sense of Responsibility",
    "Providing Life Equilibrium",
    "Role Model and Inspirational Leadership"
  ];
  constructor() {}

  ngOnInit() {}
}
