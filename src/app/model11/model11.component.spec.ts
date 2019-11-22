import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Model11Component } from './model11.component';

describe('Model11Component', () => {
  let component: Model11Component;
  let fixture: ComponentFixture<Model11Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Model11Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Model11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
