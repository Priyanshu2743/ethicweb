import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Model22Component } from './model22.component';

describe('Model22Component', () => {
  let component: Model22Component;
  let fixture: ComponentFixture<Model22Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Model22Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Model22Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
