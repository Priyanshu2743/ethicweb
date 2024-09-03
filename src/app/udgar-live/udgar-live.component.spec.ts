import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UdgarLiveComponent } from './udgar-live.component';

describe('UdgarLiveComponent', () => {
  let component: UdgarLiveComponent;
  let fixture: ComponentFixture<UdgarLiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UdgarLiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UdgarLiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
