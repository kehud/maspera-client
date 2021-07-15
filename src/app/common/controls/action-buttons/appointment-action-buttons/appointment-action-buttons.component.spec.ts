import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppointmentActionButtonsComponent } from './appointment-action-buttons.component';

describe('AppointmentActionButtonsComponent', () => {
  let component: AppointmentActionButtonsComponent;
  let fixture: ComponentFixture<AppointmentActionButtonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppointmentActionButtonsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppointmentActionButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
