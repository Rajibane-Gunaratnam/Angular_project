import { Major } from '../models/Major.js';
import { Student } from './student.js';



export interface Ticket {
  title?: string;
  description?: string;
  date?: Date;
  student?: Student;
  major?: Major;
  archived?: boolean;
}
