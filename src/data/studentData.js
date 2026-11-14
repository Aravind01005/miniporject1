export const demoCredentials = {
  username: 'student',
  password: 'campus123',
}

export const student = {
  name: 'Alex Morgan',
  initials: 'AM',
  id: 'STU-2026-0842',
  program: 'B.S. Computer Science',
  year: 'Year 3',
  semester: 'Fall semester 2026',
}

export const courses = [
  { code: 'CS 301', name: 'Data Structures & Algorithms', instructor: 'Prof. Chen', progress: 78, color: 'blue' },
  { code: 'CS 342', name: 'Human-Computer Interaction', instructor: 'Dr. Patel', progress: 64, color: 'purple' },
  { code: 'MATH 215', name: 'Linear Algebra', instructor: 'Prof. Rivera', progress: 91, color: 'orange' },
]

export const schedule = [
  { time: '09:00 AM', end: '10:15 AM', course: 'Data Structures', code: 'CS 301', location: 'Science Hall · Room 204', color: 'blue' },
  { time: '11:30 AM', end: '12:45 PM', course: 'Human-Computer Interaction', code: 'CS 342', location: 'Innovation Center · Room 18', color: 'purple' },
  { time: '02:00 PM', end: '03:15 PM', course: 'Linear Algebra', code: 'MATH 215', location: 'North Hall · Room 112', color: 'orange' },
]

export const activity = [
  { title: 'Assignment submitted', detail: 'Binary Search Trees · CS 301', date: 'Today, 8:42 AM', status: 'Submitted', color: 'blue' },
  { title: 'Quiz grade posted', detail: 'Vector Spaces · MATH 215', date: 'Yesterday', status: '18 / 20', color: 'green' },
  { title: 'New course material', detail: 'Prototyping basics · CS 342', date: 'Nov 12', status: 'View notes', color: 'purple' },
]
