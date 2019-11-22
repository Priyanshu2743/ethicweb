import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Model10Component } from './model10.component';

describe('Model10Component', () => {
  let component: Model10Component;
  let fixture: ComponentFixture<Model10Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Model10Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Model10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
