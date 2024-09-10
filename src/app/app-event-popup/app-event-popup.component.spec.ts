import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppEventPopupComponent } from './app-event-popup.component';

describe('AppEventPopupComponent', () => {
  let component: AppEventPopupComponent;
  let fixture: ComponentFixture<AppEventPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppEventPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppEventPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
