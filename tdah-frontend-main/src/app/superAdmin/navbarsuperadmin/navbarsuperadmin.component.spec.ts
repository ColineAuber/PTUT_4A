import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarsuperadminComponent } from './navbarsuperadmin.component';

describe('NavbarsuperadminComponent', () => {
  let component: NavbarsuperadminComponent;
  let fixture: ComponentFixture<NavbarsuperadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarsuperadminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarsuperadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
