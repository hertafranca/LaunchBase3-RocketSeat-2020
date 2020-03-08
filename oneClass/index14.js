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
function caculateAverage(students) {
  let sum = 0
  for (let i = 0; i < students.length; i++) {
    sum = sum + students[i].grade
  }
  const average = sum / students.length
  return average
}

function sendMessage(average, Class) {
  if (average > 7) {
    console.log(`The average of the ${Class} was ${average}.Congratulation`)
  } else {
    console.log(`The average of the ${Class} is less that 7. It's not good enough!`)
  }
}

function markFlunkedStudents(student) {
  student.flunked = false;

  if (student.grade < 7) {
    student.flunked = true
  }
}

function sendMessageFlunked(student) {
  if (student.flunked) {
    console.log(`The student ${student.name} is flunked!`)

  }
}

function flunkedStudents(students) {
  for (let student of students) {

    markFlunkedStudents(student)
    sendMessageFlunked(student)
  }
}

const average1 = caculateAverage(studentsClassA)
const average2 = caculateAverage(studentsClassB)
const average3 = caculateAverage(studentsClassC)


sendMessage(average1, 'ClassA')
sendMessage(average2, 'ClassB')
sendMessage(average3, 'ClassC')


flunkedStudents(studentsClassA)
flunkedStudents(studentsClassB)
flunkedStudents(studentsClassC)

