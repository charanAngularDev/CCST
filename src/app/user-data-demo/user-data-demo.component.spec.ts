import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDataDemoComponent } from './user-data-demo.component';

describe('UserDataDemoComponent', () => {
  let component: UserDataDemoComponent;
  let fixture: ComponentFixture<UserDataDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserDataDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDataDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
