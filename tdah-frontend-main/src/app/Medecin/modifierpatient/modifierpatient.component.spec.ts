import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierpatientComponent } from './modifierpatient.component';

describe('ModifierpatientComponent', () => {
  let component: ModifierpatientComponent;
  let fixture: ComponentFixture<ModifierpatientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifierpatientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifierpatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
