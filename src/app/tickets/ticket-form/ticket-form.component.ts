import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TicketService } from '../../../services/ticket/ticket.service';
import { Ticket } from '../../../models/ticket';
import { StudentService } from 'src/services/ticket/student.service';
import { Student } from 'src/models/student';
import { STUDENT_MOCKED } from 'src/mocks/student.mock';

@Component({
  selector: 'app-ticket-form',
  templateUrl: './ticket-form.component.html',
  styleUrls: ['./ticket-form.component.scss']
})
export class TicketFormComponent implements OnInit {

  public ticketForm: FormGroup;
  public MAJOR_LIST: string[] = ['SI', 'GB', 'GE'];
  public students: Student[];  

  constructor(public formBuilder: FormBuilder, public ticketService: TicketService, public studentService: StudentService) {
    // Added 'public' before studentService
    this.ticketForm = this.formBuilder.group({
      title: [''],
      description: [''],
      major: [''],
      studentID: ['']
    });
  }

  ngOnInit() {

    alert('JE SUIS LA');
    this.studentService.getStudents(); // Appel à la fonction getStudents

    // Utilisation de subscribe pour mettre à jour la liste des étudiants
    this.studentService.students$.subscribe(
      (students: Student[]) => {
        this.students = students;
        
        console.log("ça marche !");
      },
      (error) => {
        console.log("je suis la");
        console.error('Error fetching students:', error);
      }
    );
  }
  

  addTicket() {
    const ticketToCreate: Ticket = this.ticketForm.getRawValue() as Ticket;
    ticketToCreate.date = new Date();
  
    const selectedStudentID = this.ticketForm.get('studentID').value;
    console.log('Selected Student ID:', selectedStudentID);
    const selectedStudent = this.studentService.getStudentById(selectedStudentID);
    ticketToCreate.student = selectedStudent;
    this.ticketService.addTicket(ticketToCreate);

    
  }
  
}
