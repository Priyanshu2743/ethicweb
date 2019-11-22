import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Model29Component } from './model29.component';

describe('Model29Component', () => {
  let component: Model29Component;
  let fixture: ComponentFixture<Model29Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Model29Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Model29Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
