// 2️⃣ Student Enrollment System
// Concepts: push(), splice(), pop()
// Task:2
// Create an array students with ["John", "Emma", "Noah", "Liam"].
// A new student "Sophia" joins the class. Add them at the end.
// "Noah" drops out. Remove them.
// The last student leaves the school. Remove them.
// Print the final list.

var students = ['John', 'Emma', 'Noah', 'Liam'];
students.push('Sophia');
students.splice(2, 1);
students.pop();

console.log(students);