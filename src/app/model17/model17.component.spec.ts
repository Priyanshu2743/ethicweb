import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Model17Component } from './model17.component';

describe('Model17Component', () => {
  let component: Model17Component;
  let fixture: ComponentFixture<Model17Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Model17Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Model17Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
