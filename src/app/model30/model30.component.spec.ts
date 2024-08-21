import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Model30Component } from './model31.component';

describe('Model30Component', () => {
  let component: Model30Component;
  let fixture: ComponentFixture<Model30Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Model30Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Model30Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
