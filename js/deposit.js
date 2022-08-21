

document.getElementById('btn-deposit').addEventListener('click', function () {

    const newDepositAmount = getInputFieldValueById('deposit-field');
    const previousDepositTotal = getTextElementValueById('deposit-total');

    const newdepositTotal = newDepositAmount + previousDepositTotal;

    setTextElementValueById('deposit-total', newdepositTotal);

    const previousBalanceTotal = getTextElementValueById('balance-total');
    const newBalanceTotal = newDepositAmount + previousBalanceTotal;

    setTextElementValueById('balance-total', newBalanceTotal);


})



/* document.getElementById('btn-deposit').addEventListener('click', function () {
    const depositField = document.getElementById('deposit-field');
    const newDepositAmountString = depositField.value;
    depositField.value = '';
    const newDepositAmount = parseFloat(newDepositAmountString)

    const depositTotalElement = document.getElementById('deposit-total');
    const PreviosDepositTotalString = depositTotalElement.innerText;
    const PreviosDepositTotal = parseFloat(PreviosDepositTotalString);

    const newDepositTotal = PreviosDepositTotal + newDepositAmount;
    depositTotalElement.innerText = newDepositTotal;

    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    const newBaanceTotal = previousBalanceTotal + newDepositAmount;

    balanceTotalElement.innerText = newBaanceTotal;


}) */