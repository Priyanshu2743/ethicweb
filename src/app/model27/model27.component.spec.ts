import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Model27Component } from './model27.component';

describe('Model27Component', () => {
  let component: Model27Component;
  let fixture: ComponentFixture<Model27Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Model27Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Model27Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
