// Programmer Data:

const typeTechs = [
  { tech: 'c++', specialty: 'Desktop' },
  { tech: 'python', specialty: 'data science' },
  { tech: 'javascript', specialty: 'web/mobile' },
  { tech: 'node js', specialty: 'web/mobile' },
  { tech: 'react native', specialty: 'mobile' },
  { tech: 'flutter', specialty: 'web/mobile' }
]

const techsDevs = [
  {
  name:'Gustavo Davi', age: 27, techs: typeTechs  
  },
  {name:'Mayk Brito', age:30, techs: typeTechs
},
  {name:'Herta Franca', age:44, techs: typeTechs 
},
  {name:'Diego Fernandes', age:25, techs: typeTechs 
},

]

const dev0Name = techsDevs[0].name;
const dev0Age = techsDevs[0].age;
const kind0Tech = techsDevs[0].techs[5].tech
const spec0Tech = techsDevs[0].techs[5].specialty

console.log(`The dev ${dev0Name} is ${dev0Age} years old and
use the ${kind0Tech} with specialty ${spec0Tech}.`)


const dev1Name = techsDevs[1].name;
const dev1Age = techsDevs[1].age;
const kind1Tech = techsDevs[1].techs[3].tech
const kind1TechB = techsDevs[1].techs[4].tech
const spec1Tech = techsDevs[1].techs[3].specialty
const spec1TechB = techsDevs[1].techs[4].specialty

console.log(`The dev ${dev1Name} is ${dev1Name} years old and
use the ${kind1Tech} with specialty ${spec1Tech}
and ${kind1TechB} with specialty ${spec1TechB}.`)


const dev2Name = techsDevs[2].name;
const dev2Age = techsDevs[2].age;
const kind2Tech = techsDevs[2].techs[2].tech
const kind2TechB = techsDevs[2].techs[4].tech
const spec2Tech = techsDevs[2].techs[2].specialty
const spec2TechB = techsDevs[2].techs[4].specialty

console.log(`The dev ${dev2Name} is ${dev2Age} years old and
use the ${kind2Tech} with specialty ${spec2Tech}
and ${kind2TechB} with specialty ${spec2TechB}.`)
