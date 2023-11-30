import { Injectable } from '@angular/core';
import { Ticket } from '../../models/ticket';
import { TICKETS_MOCKED } from '../../mocks/tickets.mock';
import { BehaviorSubject } from 'rxjs/index';

@Injectable({
  providedIn: 'root'
})
export class TicketService {
  /**
   * Services Documentation:
   * https://angular.io/docs/ts/latest/tutorial/toh-pt4.html
   */

  private ticketList: Ticket[] = TICKETS_MOCKED;

  /**
   * Observable which contains the list of the tickets.
   * Naming convention: Add '$' at the end of the variable name to highlight it as an Observable.
   */
  public tickets$: BehaviorSubject<Ticket[]> = new BehaviorSubject(this.ticketList);

  constructor() {
  }

  addTicket(ticket: Ticket) {
    // You need here to update the list of ticket and then update our observable (Subject) with the new list
    // More info: https://angular.io/tutorial/toh-pt6#the-searchterms-rxjs-subject

    this.ticketList.push(ticket);
    this.tickets$.next(this.ticketList); 

  }

  /*deleteTicket(ticket: Ticket) {
    const index = this.ticketList.indexOf(ticket);
  
    if (index !== -1) {
      this.ticketList.splice(index, 1);
  
      // Utilisation de slice() pour créer une copie de la liste
      this.tickets$.next(this.ticketList.slice());
    }
  }*/
  archiveTicket(ticket: Ticket) {
    const index = this.ticketList.indexOf(ticket);
  
    if (index !== -1) {
      // Mettez à jour le statut archivé
      this.ticketList[index].archived = true;
      this.tickets$.next(this.ticketList.slice()); // Créez une nouvelle référence à la liste existante
    }
  }

}
