import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Model8Component } from './model8.component';

describe('Model8Component', () => {
  let component: Model8Component;
  let fixture: ComponentFixture<Model8Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Model8Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Model8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
