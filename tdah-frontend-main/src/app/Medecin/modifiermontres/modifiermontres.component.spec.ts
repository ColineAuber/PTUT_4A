import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifiermontresComponent } from './modifiermontres.component';

describe('ModifiermontresComponent', () => {
  let component: ModifiermontresComponent;
  let fixture: ComponentFixture<ModifiermontresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifiermontresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifiermontresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
