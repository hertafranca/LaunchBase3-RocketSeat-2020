//Cálculo imc;

const client1 = 'Susan';
const weight1 = 84;
const height1 = 1.88;

const imcClient1 = weight1 / (height1 * height1)

console.log(imcClient1)

if (imcClient1 >= 30) {
  console.log('You are overweight!')
} else {
  console.log('You are not overweight!')
}

const client2 = 'Peter';
const weight2 = 110;
const height2 = 1.75;

const imcClient2 = weight2 / (height2 * height2)

console.log(imcClient2)

if (imcClient2 >= 60) {
  console.log('You are overweight!')
} else {
  console.log('You are not overweight!')
}

const client3 = 'John';
const weight3 = 145;
const height3 = 1.70;

const imcClient3 = weight3 / (height3 * height3)

console.log(imcClient3)

if (imcClient3 >= 60) {
  console.log('You are overweight!')
} else {
  console.log('You are not overweight!')
}

const client4 = 'Paul';
const weight4 = 185;
const height4 = 1.70;

const imcClient4 = weight4 / (height4 * height4)

console.log(imcClient4)

if (imcClient4 >= 40) {
  console.log('You are overweight!')
} else {
  console.log('You are not overweight!')
}

const client5 = 'Sarah';
const weight5 = 120;
const height5 = 1.50;

const imcClient5 = weight5 / (height5 * height5)

console.log(imcClient5)

if (imcClient5 >= 40) {
  console.log('You are overweight!')
} else {
  console.log('You are not overweight!')
}

const client6 = 'Rick'
const weight6 = 130
const height6 = 1.65

const imcClient6 = weight6 / (height6 * height6)

console.log(imcClient6)

if (imcClient6 < 18.5) {
  console.log('underweight')
} else if ((imcClient6 >= 18.5) && imcClient6 <= 24.9) {
  console.log('normal weight')
} else if ((imcClient6 >= 25) && imcClient6 <= 29.9) {
  console.log('overweight')
} else if ((imcClient6 >= 30) && imcClient6 <= 34.9) {
  console.log('grade obesity 1')
} else if ((imcClient6 >= 35) && imcClient6 <= 39.9) {
  console.log('grade obesity 2')
} else {
  console.log('grade obesity 3')
}


const client7 = 'Mariah'
const weight7 = 45
const height7 = 1.65

const imcClient7 = (weight7 / (height7 * height7))

console.log(imcClient7)

if (imcClient7 < 18.5) {
  console.log('underweight')
} else if ((imcClient7 >= 18.5) && imcClient7 <= 24.9) {
  console.log('normal weight')
} else if ((imcClient7 >= 25) && imcClient7 <= 29.9) {
  console.log('overweight')
} else if ((imcClient7 >= 30) && imcClient7 <= 34.9) {
  console.log('grade obesity 1')
} else if ((imcClient7 >= 35) && imcClient7 <= 39.9) {
  console.log('grade obesity 2')
} else {
  console.log('grade obesity 3')
}
