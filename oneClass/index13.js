const studentsClassA = [
  {
    name: 'Mayk',
    grade: 9.9,
    flunked: true
  },
  {
    name: 'Diego',
    grade: 10,
    flunked: true
  },
  {
    name: 'Gay',
    grade: 6.0,
    flunked: true
  },
  {
    name: 'more student',
    grade: 9.0, 
    flunked: true
  }
]

const studentsClassB = [
  {
    name: 'Gustavo',
    grade: 9.8,
    flunked: true
  },
  {
    name: 'Filipi',
    grade: 8.0,
    flunked: true
  },
  {
    name: 'Herta',
    grade: 10, 
    flunked: true
  }
]

const studentsClassC = [
  {
    name: 'John',
    grade: 5.0, 
    flunked: true
  },
  {
    name: 'Sarah',
    grade: 6.0,
    flunked: true
  },
  {
    name: 'Peter',
    grade: 0.0, 
    flunked: true
  },
  {
    name: 'beginner',
    grade: 4.5, 
    flunked: true
  }
]

function markFlunkedStudent(student) {
  student.flunked = false;
        if (student.grade < 7) {
          student.flunked = true;
        }
 // console.table(students)
}
//markFlunkedStudent(studentsClassA)
  
    //console.log(typeof studentsClassA[0].flunked)

    function sendMessageFlunked(student) {
      if(student.flunked) {
        console.log(`The student ${student.name} is flunked!`)
      
      }
    }

    function flunkedStudent(students) {
      for(let student of students) {
       markFlunkedStudent(student);
       sendMessageFlunked(student);
      }
    }

     flunkedStudent(studentsClassA)
     flunkedStudent(studentsClassB)
     flunkedStudent(studentsClassC)
