import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Model21Component } from './model21.component';

describe('Model21Component', () => {
  let component: Model21Component;
  let fixture: ComponentFixture<Model21Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Model21Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Model21Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
