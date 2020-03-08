const studentsClassA = [
  {
    name: 'Mayk',
    grade: 9.9
  },
  {
    name: 'Diego',
    grade: 10
  },
  {
    name: 'Gay',
    grade: 2
  }
]

const studentsClassB = [
  {
    name: 'Gustavo',
    grade: 9.8
  },
  {
    name: 'Filipi',
    grade: 8.0
  },
  {
    name: 'Herta',
    grade: 10
  }
]

const studentsClassC = [
  {
    name: 'John',
    grade: 5.0
  },
  {
    name: 'Sarah',
    grade: 6.0
  },
  {
    name: 'Peter',
    grade: 0.0
  }
]

function calculateAverage(students) {
  return (students[0].grade + students[1].grade + students[2].grade) / 3
}

const average1 = calculateAverage(studentsClassA)
const average2 = calculateAverage(studentsClassB)
const average3 = calculateAverage(studentsClassC)

function sendMessage(average, Class) {
  if (average > 7) {
    console.log(`The average of the ${Class} was ${average}.Congratulation`)
  } else {
    console.log(`The average of the ${Class} is less that 7`)
  }
}

sendMessage(average1, 'ClassA')
sendMessage(average2, 'ClassB')
sendMessage(average3, 'ClassC')