// app-routing.module.ts

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentListComponent } from './path-to-student-list-component/student-list.component';
import { UserListComponent } from './tickets/ticket-list/ticket-list.component';

const routes: Routes = [
  { path: 'students', component: StudentListComponent },
  { path: 'tickets', component: TicketListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
