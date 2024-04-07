import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RootSuperAdminComponent } from './root-super-admin.component';

describe('RootSuperAdminComponent', () => {
  let component: RootSuperAdminComponent;
  let fixture: ComponentFixture<RootSuperAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RootSuperAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RootSuperAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
