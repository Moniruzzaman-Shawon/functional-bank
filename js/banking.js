function getInputValue(inputId){
    const depositInput = document.getElementById(inputId);
    const depositAmountText = depositInput.value;
    const depositAmount = parseFloat(depositAmountText); //turn into number from string
     // clear input field
     depositInput.value = '';
     return depositAmount;
}

document.getElementById('btn-deposit').addEventListener('click',function(){
   
    const depositAmount = getInputValue('deposit-field'); // calling function
    //current deposit
    const depositTotal = document.getElementById('deposit-total');
    const depositTotalText = depositTotal.innerText;
    const previuosDepositTotal = parseFloat(depositTotalText); //turn into number from string
    // addition with the amount 
    depositTotal.innerText =  depositAmount + previuosDepositTotal; //total amount plus
    //update total balance
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previuosBalanceTotal = parseFloat(balanceTotalText);

    balanceTotal.innerText = previuosBalanceTotal + depositAmount;
});

//withdraw functions
document.getElementById('btn-withdraw').addEventListener('click',function(){
    const withdrawAmount = getInputValue('withdraw-field');
    //update withdraw total
    const withdrawTotal =  document.getElementById('withdraw-total');
    const previousWithdrawTotalText = withdrawTotal.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalText);
    withdrawTotal.innerText = previousWithdrawTotal + withdrawAmount;
    
    //update total balance after withdraw
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previuosBalanceTotal = parseFloat(balanceTotalText);

    balanceTotal.innerText = previuosBalanceTotal - withdrawAmount;
});