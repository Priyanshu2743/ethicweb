import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Model25Component } from './model25.component';

describe('Model25Component', () => {
  let component: Model25Component;
  let fixture: ComponentFixture<Model25Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Model25Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Model25Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
