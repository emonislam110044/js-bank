// call Deposit button 

document.getElementById('deposit-btn').addEventListener('click', function () {


    //  print deposit input value

    const dipoInputFieldText = document.getElementById('input-diposite');

    const dipoInputAmountNumber = parseFloat(dipoInputFieldText.value);



    // change deposite innertext

    const dipoInnerText = document.getElementById('depo-inner-text');

    const dipoInnerTextConvertToNumber = parseFloat(dipoInnerText.innerText)

    const totalAmount = dipoInputAmountNumber + dipoInnerTextConvertToNumber;

    dipoInnerText.innerText = totalAmount;


    // emptey input feild 
    dipoInputFieldText.value = '';


    // add diposite to balance 

    const balanceHave = document.getElementById('balance');
    let balanceText = balanceHave.innerText;

    const balanceHaveConvertNumber = parseFloat(balanceText);

    const totalBalance = balanceHaveConvertNumber + dipoInputAmountNumber;

    balanceHave.innerText = totalBalance;
})

// withdrow 

document.getElementById('Withdraw-btn').addEventListener('click', function () {
    const withdrawInputField = document.getElementById('Withdraw-input')
    const withdrowInnerText = withdrawInputField.value;
    const withdrowInnerTextConvertIntoNumber = parseFloat(withdrowInnerText);

    // sand input value to box 
    const withdrowBox = document.getElementById('withdrow-box');
    const withdrowBoxInnerText = withdrowBox.innerText;
    const withdrowBoxInnerTextConvertIntoNumber = parseFloat(withdrowBoxInnerText);

    const currentWithdrow = withdrowBoxInnerTextConvertIntoNumber + withdrowInnerTextConvertIntoNumber;

    withdrowBox.innerText = currentWithdrow;

    // update balance 
    const balanceHave = document.getElementById('balance');
    let balanceText = balanceHave.innerText;

    const balanceHaveConvertNumber = parseFloat(balanceText);

    const totalBalance = balanceHaveConvertNumber - withdrowInnerTextConvertIntoNumber;

    balanceHave.innerText = totalBalance;


    withdrawInputField.value = '';

})