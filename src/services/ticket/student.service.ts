
import { Injectable } from '@angular/core';
import { Student } from 'src/models/student';
import { STUDENT_MOCKED } from 'src/mocks/student.mock';
import { BehaviorSubject } from 'rxjs/index';

@Injectable({
    providedIn: 'root'
  })

export class StudentService {
    private studentList: Student[] = STUDENT_MOCKED;
    public students$: BehaviorSubject<Student[]> = new BehaviorSubject(this.studentList);
    private apiUrl = 'https://api.myjson.com/bins/ck44c';

    constructor(private http: HttpClient) {}
  
    getStudents(): Student[] {
      return this.studentList;
    }

    getStudentById(id: number | string): Student | undefined {
        // Conversion en nombre car chaine de caractere
        const studentId = typeof id === 'string' ? parseInt(id, 10) : id;
    
        console.log('Calling getStudentById with ID:', studentId, 'Type:', typeof studentId);
        const student = this.studentList.find(student => student.id === studentId);
        console.log('Found Student:', student);
        return student;
    }
    
}
