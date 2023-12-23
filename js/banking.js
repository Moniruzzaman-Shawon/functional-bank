document.getElementById('btn-deposit').addEventListener('click',function(){
    const depositInput = document.getElementById('deposit-field');
    const depositAmountText = depositInput.value;
    const depositAmount = parseFloat(depositAmountText); //turn into number from string

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

    // clear input field
    depositInput.value = '';


})