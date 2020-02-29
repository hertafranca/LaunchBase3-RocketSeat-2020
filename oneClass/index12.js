//Apenas comentário sobre escopos:

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
 

function calculateMedia(students) {
  let soma = 0
  for (let i = 0; i < students.length; i++) {
    soma = soma + students[i].grade
  }
        
  const media = soma / students.length
  students [0].bla = 'Hello'
  return media
}
    
 const media1= calculateMedia(studentsClassA) 
 
 console.log(studentsClassA)
 
 
 