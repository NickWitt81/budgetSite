let income = document.getElementById('income');
let expenses = document.getElementById('expense');
let incomeButton = document.getElementById('plus');
let expenseButton = document.getElementById('minus');
let totalIncome = document.getElementById('totalincome');
let totalExpense = document.getElementById('totalexpense');
let netGainLoss = document.getElementById('net');

let startIn = 0;
let startEx = 0;

const addIncome = () => {
  num = parseFloat(income.value);
  start = start + num;
  totalIncome.innerHTML = start;
  return start;
}

const addExpense = () => {
  
}

incomeButton.addEventListener('click', addIncome);
expenseButton.addEventListener('click', addExpense);
