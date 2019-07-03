import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LauncheComponent } from './launche.component';

describe('LauncheComponent', () => {
  let component: LauncheComponent;
  let fixture: ComponentFixture<LauncheComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LauncheComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LauncheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
