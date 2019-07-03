import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LauncheLinksComponent } from './launche-links.component';

describe('LauncheLinksComponent', () => {
  let component: LauncheLinksComponent;
  let fixture: ComponentFixture<LauncheLinksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LauncheLinksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LauncheLinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
