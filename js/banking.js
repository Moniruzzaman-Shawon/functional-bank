function getInputValue(inputId){
    const inputField = document.getElementById(inputId);
    const inputAmountText = inputField.value;
    const inputAmount = parseFloat(inputAmountText); //turn into number from string
     // clear input field
     inputField.value = '';
     return inputAmount;
}

function updateTotalField(totalFieldId, amount){
    const totalField = document.getElementById(totalFieldId);
    const totalText = totalField.innerText;
    const previuosTotal = parseFloat(totalText); //turn into number from string
    totalField.innerText =  amount + previuosTotal;
}

function getCurrentBalance(){
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previuosBalanceTotal = parseFloat(balanceTotalText);
    return previuosBalanceTotal;
}

function updateBalance(amount, isAdd){
    const balanceTotal = document.getElementById('balance-total');
    const previuosBalanceTotal = getCurrentBalance();
    if (isAdd == true){
        balanceTotal.innerText = previuosBalanceTotal + amount;
    }
    else{
        balanceTotal.innerText = previuosBalanceTotal - amount;
    }
}


document.getElementById('btn-deposit').addEventListener('click',function(){
   
    const depositAmount = getInputValue('deposit-field'); // calling function
    if(depositAmount > 0){
        updateTotalField('deposit-total', depositAmount);
        updateBalance(depositAmount, true);
    }
    else{
        alert('Invalid Amount');
    }


});

//withdraw functions
document.getElementById('btn-withdraw').addEventListener('click',function(){
    const withdrawAmount = getInputValue('withdraw-field');
    const currentBalance = getCurrentBalance();
    if(withdrawAmount > 0 && withdrawAmount < currentBalance){
        updateTotalField('withdraw-total', withdrawAmount);
        updateBalance(withdrawAmount, false);  
    }
    else if(withdrawAmount > currentBalance){
        alert('You do not have enough money');
    }
    else{
        alert('Invalid Amount');
    }
});