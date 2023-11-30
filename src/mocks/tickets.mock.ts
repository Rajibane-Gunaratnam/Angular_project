//Importation
import { Ticket } from '../models/ticket';
import { Major } from '../models/Major.js';
import { STUDENT_MOCKED } from './student.mock';


// Appel de la fonction date 
const dateToday: Date = new Date();

//Initialisation des tickets lors du chargement de la page
export const TICKETS_MOCKED: Ticket[] = [
  {
    title: 'SI4 in Istanbul',
    description: '',
    date: dateToday,
    student: STUDENT_MOCKED[0],
    major: Major.SI,
    archived: false
  },
  {
    title: 'SI5 in Paris',
    description: 'Description du voyage',
    date: dateToday,
    student : STUDENT_MOCKED[1],
    major: Major.GE,
    archived : true
  },
];
