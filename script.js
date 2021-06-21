let income = document.getElementById('income');
let expenses = document.getElementById('expense');
let incomeButton = document.getElementById('plus');
let expenseButton = document.getElementById('minus');
let totalIncome = document.getElementById('totalincome');
let totalExpense = document.getElementById('totalexpense');
let netGainLoss = document.getElementById('net');

let startIn = 0;
let startEx = 0;
let net = 0;

const addIncome = () => {
  let num = parseFloat(income.value);
  startIn = startIn + num;
  totalIncome.innerHTML = startIn;
  net = net + parseFloat(income.value);
  netGainLoss.innerHTML = net;
  return startIn;
}

const addExpense = () => {
  let num = parseFloat(expenses.value);
  startEx = startEx + num;
  totalExpense.innerHTML = startEx;
  net = net - parseFloat(expenses.value);
  netGainLoss.innerHTML = net;
  return startEx;
}

incomeButton.addEventListener('click', addIncome);
expenseButton.addEventListener('click', addExpense);
