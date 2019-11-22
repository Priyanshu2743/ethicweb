import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Model26Component } from './model26.component';

describe('Model26Component', () => {
  let component: Model26Component;
  let fixture: ComponentFixture<Model26Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Model26Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Model26Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
