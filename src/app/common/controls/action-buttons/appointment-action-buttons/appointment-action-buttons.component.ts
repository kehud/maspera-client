import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: '[app-appointment-action-buttons]',
  templateUrl: './appointment-action-buttons.component.html',
  styleUrls: ['./appointment-action-buttons.component.scss']
})
export class AppointmentActionButtonsComponent implements OnInit {

  constructor() { }

   //input
   @Input() actionButtons: any;

   //output
   @Output() detailsButtonClicked: EventEmitter<string> = new EventEmitter<string>();
   @Output() editButtonClicked: EventEmitter<string> = new EventEmitter<string>();

  ngOnInit(): void {
  }

  
  OpenDetailsForm(){
    this.detailsButtonClicked.emit();
  }

  OpenEditForm(){
    this.editButtonClicked.emit();
  }
}
