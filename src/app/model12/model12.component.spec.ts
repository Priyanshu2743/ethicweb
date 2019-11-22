import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Model12Component } from './model12.component';

describe('Model12Component', () => {
  let component: Model12Component;
  let fixture: ComponentFixture<Model12Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Model12Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Model12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
