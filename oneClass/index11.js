const studentsClassA = [ 
  {
    name:'Mayk',
    grade: 9.9
  },
  {
    name:'Diego',
    grade:10
  },
  {
    name:'Gay',
    grade:8
  },
  {
    name:'more student',
    grade:9.0
  }
  ]
  
  const studentsClassB = [ 
    {
      name:'Gustavo',
      grade: 9.8
    },
    {
      name:'Filipi',
      grade:8.0
    },
    {
      name:'Herta',
      grade:10
    }
    ]

    const studentsClassC = [ 
      {
        name:'John',
        grade: 5.0
      },
      {
        name:'Sarah',
        grade:6.0
      },
      {
        name:'Peter',
        grade:0.0
      },
      {
        name:'beginner',
        grade:4.5
      }
    ]

function calculateMedia(students) {
  let soma = 0
  for (let i = 0; i < students.length; i++) {
    soma = soma + students[i].grade
  }
  const media = soma / students.length
  return media
}
  
 const media1= calculateMedia(studentsClassA) 
 const media2= calculateMedia(studentsClassB)
 const media3= calculateMedia(studentsClassC)

 function sendMessage(media, Class) {
  if (media > 7) {
    console.log(`The media of the ${Class} was ${media}.Congratulation`)
  } else {
    console.log(`The media of the ${Class} is less that 7`)
  }
 }

 sendMessage(media1,'ClassA')
 sendMessage(media2,'ClassB')
 sendMessage(media3,'ClassC')