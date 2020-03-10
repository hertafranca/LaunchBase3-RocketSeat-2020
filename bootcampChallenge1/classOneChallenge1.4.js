//Operações Bancárias nas contas dos usuários:

const user = {
  name: 'Sarah',
  transactions: [],
  balance: 0
}

function getHigherTransactionByType(transactionType) {
  let higherTransaction;
  let value = 0
  for (let transaction of user.transactions) {
    if (transaction.type === transactionType) {
      if (transaction.value > value) {
        value = transaction.value
        higherTransaction = transaction
      }
    }
  }
  console.log(higherTransaction)
  return higherTransaction
}

function createTransaction(type, value) {
  user.transactions.push(
    { type: type, value: value }
  )

  if (type === 'credit') {
    user.balance = user.balance + value
    console.log(`The user ${user.name} has credit of ${user.balance}`)
  } else {
    user.balance = user.balance - value
    console.log(`The user ${user.name} has debit of ${user.balance}`)
  }
}

function getAverageTransactionValue() {
  let averageTransaction = 0
  for (let transaction of user.transactions) {
    averageTransaction = averageTransaction + transaction.value
  }
  return averageTransaction / user.transactions.length
}

function getTransactionsCount() {
  let creditTransactions = 0
  let debitTransactions = 0

  for (let transactions of user.transactions) {
    if (transactions.type === 'credit') {
      creditTransactions = creditTransactions + 1
    } else {
      debitTransactions = debitTransactions + 1
    }
    console.log({ 'credit': creditTransactions, 'debit': debitTransactions })
  }
  return ({ creditTransactions, debitTransactions })
}

createTransaction('credit', 50.5)
createTransaction('debit', 100)
createTransaction('debit', 400)
createTransaction('credit', 70.5)
createTransaction('credit', 80.5)

getHigherTransactionByType('credit')
getHigherTransactionByType('debit')
getAverageTransactionValue()
getTransactionsCount()

