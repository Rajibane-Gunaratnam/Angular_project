// student-list.component.ts
import { Component, OnInit } from '@angular/core';
import { StudentService } from '../../../services/ticket/student.service';
import { Student } from '../../../models/student';


@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css'],
})
export class StudentListComponent implements OnInit {
  students: Student[] = [];

  constructor(private studentService: StudentService) {}

  ngOnInit(): void {
    this.studentService.students$.subscribe((students) => {
      this.students = students;
    });

    this.studentService.getStudents(); // Appel pour charger la liste des étudiants
  }
}
