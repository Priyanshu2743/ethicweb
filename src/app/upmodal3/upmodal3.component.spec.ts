import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Upmodal3Component } from './upmodal3.component';

describe('Upmodal3Component', () => {
  let component: Upmodal3Component;
  let fixture: ComponentFixture<Upmodal3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Upmodal3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Upmodal3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
