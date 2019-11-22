import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Model18Component } from './model18.component';

describe('Model18Component', () => {
  let component: Model18Component;
  let fixture: ComponentFixture<Model18Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Model18Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Model18Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
