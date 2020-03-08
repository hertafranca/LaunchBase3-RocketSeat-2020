//Array of the users:

const typeTechs = [
  { techs: ['React', 'React Native'] },
  { techs: ['JavaScript', 'React'] },
  { techs: ['Css', 'javaScript'] },
  { techs: ['Node js', 'Flutter'] }
]
//console.log(typeTechs)

const users = [
  { name: 'Diego' },
  { name: 'Mayk' },
  { name: 'Herta' },
  { name: 'Gustavo' }
]
//console.log(users)

const users0Name = users[0].name;
const typeTechs0Techs = typeTechs[0].techs;
//console.log(`The ${users0Name} works with the techs: ${typeTechs0Techs}.`)

const users1Name = users[1].name;
const typeTechs1Techs = typeTechs[1].techs;
//console.log(`The ${users1Name} works with the techs: ${typeTechs1Techs}.`)

const users2Name = users[2].name;
const typeTechs2Techs = typeTechs[2].techs;
//console.log(`The ${users2Name} works with the techs: ${typeTechs2Techs}.`)

const users3Name = users[3].name;
const typeTechs3Techs = typeTechs[3].techs;
//console.log(`The ${users3Name} works with the techs: ${typeTechs3Techs}.`)*/


const profileUsers = [

  { name: 'Diego', techs: ['React', 'React Native'] },
  { name: 'Mayk', techs: ['JavaScript', 'React'] },
  { name: 'Herta', techs: ['Css', 'JavaScript'] },
  { name: 'Gustavo', techs: ['Node js', 'Flutter'] }

]


// Percorrer todos os arrays:
function checkIfDevUseCss(profileUsers) {
  let checkCss = false
  for (let p = 0; p < profileUsers.length; p++) {
    const techsUser = profileUsers[p].techs
    for (let i = 0; i < techsUser.length; i++) {
      if (techsUser[i] === 'Css') {
        checkCss = true
      }
    }
  }
  return checkCss
}
console.log(checkIfDevUseCss(profileUsers))


// Percorrer o array das techs:

function checkifTechCss(arrayTechs) {
  let checkCss = false
  for (let i = 0; i < arrayTechs.length; i++) {
    if (arrayTechs[i] === 'Css') {
      checkCss = true
    }
  }
  return checkCss
}

function checkIfUserCss(arrayUser) {
  for (let p = 0; p < profileUsers.length; p++) {
    const techsUser = profileUsers[p].techs
    const dev = profileUsers[p].name
    if (checkifTechCss(techsUser)) {
      console.log(`The User ${dev} works with the tech:${techsUser} .`)
    } else {
      console.log(`The User ${dev} doesn't work with this tech.`)
    }
  }
}
checkIfUserCss(profileUsers)


