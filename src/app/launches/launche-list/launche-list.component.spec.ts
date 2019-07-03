import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LauncheListComponent } from './launche-list.component';

describe('LauncheListComponent', () => {
  let component: LauncheListComponent;
  let fixture: ComponentFixture<LauncheListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LauncheListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LauncheListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
