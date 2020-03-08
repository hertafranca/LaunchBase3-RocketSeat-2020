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
    grade: 8
  },
  {
    name: 'more student',
    grade: 9.0
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
  },
  {
    name: 'beginner',
    grade: 4.5
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

const average1 = caculateAverage(studentsClassA)
const average2 = caculateAverage(studentsClassB)
const average3 = caculateAverage(studentsClassC)

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