import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RootMedecinComponent } from './root-medecin.component';

describe('RootMedecinComponent', () => {
  let component: RootMedecinComponent;
  let fixture: ComponentFixture<RootMedecinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RootMedecinComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RootMedecinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
