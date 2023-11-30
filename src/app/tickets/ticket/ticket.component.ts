import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Ticket } from '../../../models/ticket';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.scss']
})
export class TicketComponent implements OnInit {

  /**
   * Inputs & Output allow communication between parent & child components.
   * More information: https://angular.io/guide/component-interaction
   */
  @Input()
  ticket: Ticket;

  @Output()
  ticketHasBeenSelected: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() deleteEvent = new EventEmitter<Ticket>();

  constructor() {
  }

  ngOnInit() {
  }
//Fonction permettant à l'utilisateur de selectionner ou supprimer tickets :
  selectTicket() {
    this.ticketHasBeenSelected.emit(true);
  }

  deleteTicket() {
    this.deleteEvent.emit(this.ticket);
  }

}
