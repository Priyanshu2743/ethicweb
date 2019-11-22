import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Model13Component } from './model13.component';

describe('Model13Component', () => {
  let component: Model13Component;
  let fixture: ComponentFixture<Model13Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Model13Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Model13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
