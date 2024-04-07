import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutermontreComponent } from './ajoutermontre.component';

describe('AjoutermontreComponent', () => {
  let component: AjoutermontreComponent;
  let fixture: ComponentFixture<AjoutermontreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjoutermontreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutermontreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
