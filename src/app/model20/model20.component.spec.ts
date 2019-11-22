import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Model20Component } from './model20.component';

describe('Model20Component', () => {
  let component: Model20Component;
  let fixture: ComponentFixture<Model20Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Model20Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Model20Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
