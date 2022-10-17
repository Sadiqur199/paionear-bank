
//login button event handelar
const loginArea = document.getElementById('login');

loginArea.addEventListener('click',function(){

const submiBtn = document.getElementById('login-area');

submiBtn.style.display = 'none';

const transaction = document.getElementById('transaction-area');

transaction.style.display = 'block';

})


//deposite button event handelar
const deposite = document.getElementById('addDeposit');
//console.log(deposite)

deposite.addEventListener('click',function(){
const depositeNumber = getInputNumber('depositAmount')

  // const depositeAmount = document.getElementById('depositAmount').value;
  // const depositeNumber = parseFloat(depositeAmount);
  //console.log(depositeNumber)


//   const currentDeposit = document.getElementById('currentDposit').innerText;
//   const currentDepositNumber = parseFloat(currentDeposit);
//  const totalDeposit = depositeNumber + currentDepositNumber;
//  document.getElementById('currentDposit').innerText = totalDeposit;

//  const currentBalance =  document.getElementById('currentBalance').innerText;
//  const currentBalanceNumber = parseFloat(currentBalance);
//  const totalBalance = currentBalanceNumber +  depositeNumber ;
//  document.getElementById('currentBalance').innerText = totalBalance;

updateSpanText('currentDeposit',depositeNumber);
updateSpanText('currentBalance',depositeNumber);

const withDrawBtn = document.getElementById('addWithdraw');
withDrawBtn.addEventListener('click',function(){
const withDrawNumber = getInputNumber('withDrawAmaount');
console.log(withDrawNumber);

})

document.getElementById('depositAmount').value = '';
})

//withDraw event Handelar
function getInputNumber(id){
  const amount = document.getElementById(id).value;
  const amountNumber = parseFloat(amount);
  return amountNumber;
}

//add deposit and balance
function updateSpanText(id,depositeNumber){
  const currentBalance =  document.getElementById(id).innerText;
 const currentBalanceNumber = parseFloat(currentBalance);
 const totalBalance = currentBalanceNumber + depositeNumber ;
 document.getElementById(id).innerText = totalBalance;
}