import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Model31Component } from './model31.component';

describe('Model31Component', () => {
  let component: Model31Component;
  let fixture: ComponentFixture<Model31Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Model31Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Model31Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
