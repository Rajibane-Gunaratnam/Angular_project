// student.service.ts
import { Injectable } from '@angular/core';
import { Student } from 'src/models/student';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs/index';

@Injectable({
    providedIn: 'root'
})
export class StudentService {
    private studentList: Student[] = [];
    public students$: BehaviorSubject<Student[]> = new BehaviorSubject(this.studentList);
    private apiUrl = 'http://localhost:3000/students';

    constructor(private http: HttpClient) {
        this.getStudents();
    }
//Fonction permettant de récupérer le student à traver l'API
    getStudents(): void {
        this.http.get<Student[]>(this.apiUrl).subscribe(
            (students: Student[]) => {
                this.studentList = students;
                this.students$.next(this.studentList);
            },
            (error) => {
                console.error('Error fetching students:', error);
            }
        );
    }
//Fonction permettant de récupérer l'ID du student
    getStudentById(id: number | string): Student | undefined {
        const studentId = typeof id === 'string' ? parseInt(id, 10) : id;
        const student = this.studentList.find(student => student.id === studentId);
        return student;
    }
}
