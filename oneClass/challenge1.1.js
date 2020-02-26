// Challenge 1.1:
/*
Deixar a expressão menor e usar os operadores lógicos:
verificar se a pessoa é maior que 18 anos e igual a 18 anos;
se sim, deixar entrar, se não, bloquear a entrada;
Se a pessoa tiver 17 anos avisar para voltar quando fize 18 anos.
Verificar se for (true) vai receber a mensagem "Let In!"
Se for (false) vai receber a mensagem "Block Entry!"
Se a pessoa tiver 17 anos vai receber a mensagem "Block ENtry. 
Come Back You Will Have 18"
*/

const ageCustomer1= 17
const ageCustomer2= 16
const ageCustomer3= 18

if(!(ageCustomer1 >=18) && ageCustomer1===17) {
  console.log ('Block Entry. Come Back You Will HAVE 18!')
} else { 
  console.log ('Let In!')
}

if (!(ageCustomer2 >=18) || ageCustomer2===17) {
  console.log ('Block Entry!')
} else { 
  console.log ('Let In!')
}

if (!(ageCustomer3 >=18) || ageCustomer3===17) {
  console.log ('Block Entry!')
} else { 
  console.log ('Let In!')
}

