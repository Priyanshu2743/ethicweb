import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DUActivitiesComponent } from './du-activities.component';

describe('DUActivitiesComponent', () => {
  let component: DUActivitiesComponent;
  let fixture: ComponentFixture<DUActivitiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DUActivitiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DUActivitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
