// app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Routes } from '@angular/router';
import { TicketFormComponent } from './tickets/ticket-form/ticket-form.component';
import { TicketListComponent } from './tickets/ticket-list/ticket-list.component';
import { StudentListComponent } from './student/student-list/student-list.component';

const routes: Routes = [
    {path: 'ajout', component: TicketFormComponent},
    {path: 'ticket', component: TicketListComponent},
 // {path: 'students', component: StudentListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
