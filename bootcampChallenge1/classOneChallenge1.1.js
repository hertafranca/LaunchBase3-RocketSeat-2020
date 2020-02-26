//Cálculo da Aposentadoria:

const worker='Peter';
const gener='Masculine';
const age=60;
const contribTime=35;

if (gener==='Feminine') {
  if (age + contribTime >=85) {
    console.log('worker is able to retire')
  }else {
    console.log('worker is not fit to retire')
  }
} else {
  if (age + contribTime >=95) {
    console.log('worker is able to retire')
  } else {
    console.log('worker is not fit to retire')
  }
} 


