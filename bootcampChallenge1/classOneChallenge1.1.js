//Cálculo da Aposentadoria:

const worker1='Peter';
const gener1='Masculine';
const age1=60;
const contribTime1=35;

if (gener1==='Feminine') {
  if (age1 + contribTime1 >=85) {
    console.log(`${worker1} is able to retire`)
  }else {
    console.log(`${worker1} is not fit to retire`)
  }
} else {
  if (age1 + contribTime1 >=95) {
    console.log(`${worker1} is able to retire`)
  } else {
    console.log(`${worker1} is not fit to retire`)
  }
} 

const worker2='Julie';
const gener2='Feminine';
const age2=50;
const contribTime2=25;

const totalTime2= age2+contribTime2

console.log(totalTime2)

if ((gener2==='Feminine') && totalTime2>=85) {
    console.log(`${worker2} is able to retire.`)
} else if ((gener2!=='Feminine') && totalTime2<85) {
    console.log(`${worker2} is not fit to retire.`)
} else if ((gener2==='Masculine') && totalTime2>=95) {
    console.log(`${worker2} is able to retire.`)
}else{
    console.log(`${worker2} is not fit to retire.`)
}


const worker3='Ricky';
const gener3='Masculine';
const age3=70;
const contribTime3=45;

const totalTime3= age3+contribTime3

console.log(totalTime3)

if ((gener3==='Feminine') && totalTime3>=85) {
  console.log(`${worker3} is able to retire.`)
} else if ((gener3!=='Feminine') && totalTime3<85) {
  console.log(`${worker3} is not fit to retire.`)
} else if ((gener3==='Masculine') && totalTime3>=95) {
  console.log(`${worker3} is able to retire.`)
} else {
  console.log(`${worker3} is not fit to retire.`)
}