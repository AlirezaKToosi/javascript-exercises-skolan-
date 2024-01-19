let lexicon = {
  name: "Lexicon",
  address: "Klarabergsviadukten 70",
  zipcode: "10137 ",
  city: "STOCKHOLM",
  students: [],
  teachers: [],
};

let math = {
  name: "Mathematics",
  students: [],
  teacher: {},
};

let english = {
  name: "English",
  students: [],
  teacher: {},
};

let science = {
  name: "Science",
  students: [],
  teacher: {},
};


let student1 = {
  name: "Alice",
  age: 20,
  gender: "Female",
  subjects: [],
};

let student2 = {
  name: "Bob",
  age: 22,
  gender: "Male",
  subjects: [],
};

let student3 = {
  name: "Charlie",
  age: 21,
  gender: "Male",
  subjects: [],
};

let student4 = {
  name: "Diana",
  age: 23,
  gender: "Female",
  subjects: [],
};

let student5 = {
  name: "Eva",
  age: 19,
  gender: "Female",
  subjects: [],
};


let teacher1 = {
  name: "Mr. Johnson",
  subjects: [],
};

let teacher2 = {
  name: "Ms. Smith",
  subjects: [],
};

//************************************************************** */

function addSubjectToTeacher(subject, teacher) {
  teacher.subjects.push(subject);
  subject.teacher = teacher;
  return teacher;
}

function enlistToSubject(student, subject) {
  student.subjects.push(subject);
  subject.students.push(student);
}

lexicon.addTeacher = function (teacher) {
  this.teachers.push(teacher);
};

lexicon.addStudent = function (student) {
  this.students.push(student);
};

lexicon.enlistToSubject = function (student, subject) {
  enlistToSubject(student, subject);
};

lexicon.addSubject = function (subject) {
  if (!subject.teacher) {
    let randomTeacher = this.teachers[Math.floor(Math.random() * this.teachers.length)];
    addSubjectToTeacher(subject, randomTeacher);
  }
};
//******************************************************** */

function displayAllStudents() {
  for (let key in lexicon.students) {
    console.log(lexicon.students[key]);
  }
}

//******************************************************** */
enlistToSubject(student1, science);
enlistToSubject(student2, math);
enlistToSubject(student3, english);
addSubjectToTeacher(science, teacher1);
addSubjectToTeacher(math, teacher1);
addSubjectToTeacher(english, teacher2);
//******************************************************** */

// samples
lexicon.addTeacher(teacher1);
lexicon.addTeacher(teacher2);
lexicon.addStudent(student1);
lexicon.addStudent(student2);
lexicon.addSubject(math);
lexicon.addSubject(english);
//******************************************************** */

displayAllStudents();
