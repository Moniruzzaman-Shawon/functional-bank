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

document.getElementById('btn-deposit').addEventListener('click',function(){
   
    const depositAmount = getInputValue('deposit-field'); // calling function
 
    updateTotalField('deposit-total', depositAmount);
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previuosBalanceTotal = parseFloat(balanceTotalText);

    balanceTotal.innerText = previuosBalanceTotal + depositAmount;
});

//withdraw functions
document.getElementById('btn-withdraw').addEventListener('click',function(){
    const withdrawAmount = getInputValue('withdraw-field');
 
    
    updateTotalField('withdraw-total', withdrawAmount);
    //update total balance after withdraw
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previuosBalanceTotal = parseFloat(balanceTotalText);

    balanceTotal.innerText = previuosBalanceTotal - withdrawAmount;
});