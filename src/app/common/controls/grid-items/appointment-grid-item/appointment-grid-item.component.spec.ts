import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppointmentGridItemComponent } from './appointment-grid-item.component';

describe('AppointmentGridItemComponent', () => {
  let component: AppointmentGridItemComponent;
  let fixture: ComponentFixture<AppointmentGridItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppointmentGridItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppointmentGridItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
