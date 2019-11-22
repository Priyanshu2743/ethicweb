import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Model24Component } from './model24.component';

describe('Model24Component', () => {
  let component: Model24Component;
  let fixture: ComponentFixture<Model24Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Model24Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Model24Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
