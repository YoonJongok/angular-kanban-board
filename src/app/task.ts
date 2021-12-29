export interface ITask {
  id: number;
  content: string;
  day: string;
  reminder: boolean;
}
export const tasks: ITask[] = [
  {
    id: 1,
    content: 'Doctors Appointment',
    day: 'May 5th at 2:30pm',
    reminder: true,
  },
  {
    id: 2,
    content: 'Meeting at School',
    day: 'May 6th at 1:30pm',
    reminder: true,
  },
  {
    id: 3,
    content: 'Food Shopping',
    day: 'May 7th at 12:30pm',
    reminder: false,
  },
];
