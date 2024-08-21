import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Model32Component } from './model32.component';

describe('Model32Component', () => {
  let component: Model32Component;
  let fixture: ComponentFixture<Model32Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Model32Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Model32Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
