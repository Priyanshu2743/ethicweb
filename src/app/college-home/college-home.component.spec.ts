import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CollegeHomeComponent } from './college-home.component';

describe('CollegeHomeComponent', () => {
  let component: CollegeHomeComponent;
  let fixture: ComponentFixture<CollegeHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CollegeHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollegeHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
