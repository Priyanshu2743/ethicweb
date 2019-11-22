import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Model16Component } from './model16.component';

describe('Model16Component', () => {
  let component: Model16Component;
  let fixture: ComponentFixture<Model16Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Model16Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Model16Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
