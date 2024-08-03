import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UdgaarComponent } from './udgaar.component';

describe('UdgaarComponent', () => {
  let component: UdgaarComponent;
  let fixture: ComponentFixture<UdgaarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UdgaarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UdgaarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
