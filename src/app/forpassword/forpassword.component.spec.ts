import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForpasswordComponent } from './forpassword.component';

describe('ForpasswordComponent', () => {
  let component: ForpasswordComponent;
  let fixture: ComponentFixture<ForpasswordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForpasswordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForpasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
