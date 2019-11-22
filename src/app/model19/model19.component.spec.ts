import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Model19Component } from './model19.component';

describe('Model19Component', () => {
  let component: Model19Component;
  let fixture: ComponentFixture<Model19Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Model19Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Model19Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
