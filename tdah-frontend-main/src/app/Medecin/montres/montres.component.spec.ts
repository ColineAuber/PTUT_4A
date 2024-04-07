import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MontresComponent } from './montres.component';

describe('MontresComponent', () => {
  let component: MontresComponent;
  let fixture: ComponentFixture<MontresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MontresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MontresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
