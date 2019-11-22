import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Model23Component } from './model23.component';

describe('Model23Component', () => {
  let component: Model23Component;
  let fixture: ComponentFixture<Model23Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Model23Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Model23Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
