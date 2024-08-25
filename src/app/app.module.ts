import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { FooterComponent } from "./footer/footer.component";
import { GetInTouchComponent } from "./get-in-touch/get-in-touch.component";
import { NgsRevealModule } from "node_modules/ngx-scrollreveal";
import { TestinomialComponent } from "./testinomial/testinomial.component";
import { OurCausesComponent } from "./our-causes/our-causes.component";
import { RecentEventsComponent } from "./recent-events/recent-events.component";
import { StayTuneComponent } from "./stay-tune/stay-tune.component";
import { UpcomingEventsComponent } from "./upcoming-events/upcoming-events.component";
import { LeadersComponent } from "./leaders/leaders.component";
import { WhyjoinComponent } from "./whyjoin/whyjoin.component";
import { HomeSliderComponent } from "./home-slider/home-slider.component";
import { CollegesComponent } from "./colleges/colleges.component";
import { NavmenuComponent } from "./navmenu/navmenu.component";
import { MobNavComponent } from "./mob-nav/mob-nav.component";
import { HomePageComponent } from "./home-page/home-page.component";
import { RouterModule, Routes } from "@angular/router";
import { EduTrainingComponent } from "./edu-training/edu-training.component";
import { Phase1Component } from "./phase1/phase1.component";
import { EduRouteComponent } from "./edu-route/edu-route.component";
import { Phase2Component } from "./phase2/phase2.component";
import { Phase3Component } from "./phase3/phase3.component";
import { Phase4Component } from "./phase4/phase4.component";
import { ObjectivesComponent } from "./objectives/objectives.component";
import { AboutUsComponent } from "./about-us/about-us.component";
import { MembersComponent } from "./members/members.component";
import { AmbassadorComponent } from "./ambassador/ambassador.component";
import { OfficerComponent } from "./officer/officer.component";
import { OverviewComponent } from "./overview/overview.component";
import { MenuReventsComponent } from "./menu-revents/menu-revents.component";
import { RecentModelComponent } from "./recent-model/recent-model.component";
import { Model0Component } from "./model0/model0.component";
import { Model1Component } from "./model1/model1.component";
import { Model2Component } from "./model2/model2.component";
import { Model3Component } from "./model3/model3.component";
import { Model4Component } from "./model4/model4.component";
import { Model5Component } from "./model5/model5.component";
import { Model6Component } from "./model6/model6.component";
import { Model7Component } from "./model7/model7.component";
import { Model8Component } from "./model8/model8.component";
import { UpmodalComponent } from "./upmodal/upmodal.component";
import { Upmodal2Component } from "./upmodal2/upmodal2.component";
import { Upmodal3Component } from "./upmodal3/upmodal3.component";
import { JoinFromComponent } from "./join-from/join-from.component";
import { HttpClientModule } from '@angular/common/http';
import { AdminComponent } from './admin/admin.component';
import { AdmLoginComponent } from './adm-login/adm-login.component';
import { Authenticate } from './shared/authenticate.service';
import { AuthGaurd } from './shared/authGaurd.service';
import { AuthDeGaurd } from './shared/authDeGaurd.service';
import { CaFormComponent } from './ca-form/ca-form.component';
import { EeoFormComponent } from './eeo-form/eeo-form.component';
import { Model9Component } from './model9/model9.component';
import { Model10Component } from './model10/model10.component';
import { Model11Component } from './model11/model11.component';
import { Model12Component } from './model12/model12.component';
import { Model13Component } from './model13/model13.component';
import { Model14Component } from './model14/model14.component';
import { Model15Component } from './model15/model15.component';
import { Model16Component } from './model16/model16.component';
import { Model17Component } from './model17/model17.component';
import { Model18Component } from './model18/model18.component';
import { Model19Component } from './model19/model19.component';
import { Model20Component } from './model20/model20.component';
import { Model21Component } from './model21/model21.component';
import { Model22Component } from './model22/model22.component';
import { Model23Component } from './model23/model23.component';
import { Model24Component } from './model24/model24.component';
import { Model25Component } from './model25/model25.component';
import { Model26Component } from './model26/model26.component';
import { Model27Component } from './model27/model27.component';
import { Model28Component } from './model28/model28.component';
import { Model29Component } from './model29/model29.component';
import { Model30Component } from "./model30/model30.component";
import { Model31Component } from "./model31/model31.component";
import { Model32Component } from "./model32/model32.component";
import { UdgaarComponent } from './udgaar/udgaar.component';
import { CollegeHomeComponent } from './college-home/college-home.component';

const routes: Routes = [
  { path: "home", component: HomePageComponent },
  {
    path: "education & training",
    component: EduTrainingComponent,
    children: [
      { path: "phase1", component: Phase1Component },
      { path: "phase2", component: Phase2Component },
      { path: "phase3", component: Phase3Component },
      { path: "phase4", component: Phase4Component },
      { path: "", component: EduRouteComponent }
    ]
  },
  {path:"admin", component: AdmLoginComponent},
  {path:"adminView", component:AdminComponent, canActivate:[AuthGaurd], canDeactivate:[AuthDeGaurd]},
  {path:"joinus", component:JoinFromComponent},
  {path:"campus/ambassador", component:CaFormComponent},
  {path:"executive/officer", component:EeoFormComponent},
  { path: "objectives", component: ObjectivesComponent },
  { path: "about", component: AboutUsComponent },
  { path: "overview", component: OverviewComponent },
  { path: "members", component: MembersComponent },
  { path: "ambassador", component: AmbassadorComponent },
  { path: "officer", component: OfficerComponent },
  { path: "recent events", component: MenuReventsComponent },
  { path: "contact us", component: GetInTouchComponent },
  { path: "activities", component: OurCausesComponent },
  { path: "r-events/:id", component: RecentModelComponent },
  { path: "up-modal1", component: UpmodalComponent },
  { path: "up-modal2", component: Upmodal2Component },
  { path: "up-modal3", component: Upmodal3Component },
  { path: "udgaar", component: UdgaarComponent },
  { path: "college-home", component: CollegeHomeComponent },
  { path: "**", redirectTo: "home", pathMatch: "full" }
];

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    GetInTouchComponent,
    TestinomialComponent,
    OurCausesComponent,
    RecentEventsComponent,
    StayTuneComponent,
    UpcomingEventsComponent,
    LeadersComponent,
    WhyjoinComponent,
    HomeSliderComponent,
    CollegesComponent,
    NavmenuComponent,
    MobNavComponent,
    HomePageComponent,
    EduTrainingComponent,
    Phase1Component,
    EduRouteComponent,
    Phase2Component,
    Phase3Component,
    Phase4Component,
    ObjectivesComponent,
    AboutUsComponent,
    MembersComponent,
    AmbassadorComponent,
    OfficerComponent,
    OverviewComponent,
    MenuReventsComponent,
    RecentModelComponent,
    Model0Component,
    Model1Component,
    Model2Component,
    Model3Component,
    Model4Component,
    Model5Component,
    Model6Component,
    Model7Component,
    Model8Component,
    UpmodalComponent,
    Upmodal2Component,
    Upmodal3Component,
    JoinFromComponent,
    AdminComponent,
    AdmLoginComponent,
    CaFormComponent,
    EeoFormComponent,
    Model9Component,
    Model10Component,
    Model11Component,
    Model12Component,
    Model13Component,
    Model14Component,
    Model15Component,
    Model16Component,
    Model17Component,
    Model18Component,
    Model19Component,
    Model20Component,
    Model21Component,
    Model22Component,
    Model23Component,
    Model24Component,
    Model25Component,
    Model26Component,
    Model27Component,
    Model28Component,
    Model29Component,
    Model30Component,
    Model31Component,
    Model32Component,
    UdgaarComponent,
    CollegeHomeComponent
  ],
  imports: [
    BrowserModule,
    NgsRevealModule,
    RouterModule.forRoot(routes, { useHash: true }),
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [Authenticate,AuthGaurd,AuthDeGaurd],
  bootstrap: [AppComponent]
})
export class AppModule {}
