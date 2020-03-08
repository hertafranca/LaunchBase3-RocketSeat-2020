// Soma de despesas e receitas:

const usersBalance = [
  {
    name: 'Salvio',
    incomes: [115.3, 48.7, 98.3, 14.5],
    expenses: [85.3, 13.5, 19.9]
  },
  {
    name: 'Marcio',
    incomes: [24.6, 214.3, 45.3],
    expenses: [185.3, 12.1, 120.0]
  },
  {
    name: 'Lucia',
    incomes: [9.8, 120.3, 340.2, 45.3],
    expenses: [45.2, 29.9]
  }
]

function calculateBalance(incomes, expenses) { 
  let incomesSum = sum(incomes)
  let expensesSum = sum(expenses)

  return incomesSum - expensesSum
}


function sum(numbers) {
  let sumNumbers = 0
  for (let i = 0; i < numbers.length; i++) {
    sumNumbers = sumNumbers + numbers[i]
    //console.log(numbers[i])
  }
  return sumNumbers
}

for (let i = 0; i < usersBalance.length; i++) {

  let name = usersBalance[i].name
  let result = 'POSITIVE'
  let TotalBalance = calculateBalance(usersBalance[i].incomes, usersBalance[i].expenses)

  if (TotalBalance < 0) {
    result = 'NEGATIVE'
  }

  console.log(`The user ${name} has balance ${result} of ${TotalBalance}`)
}

