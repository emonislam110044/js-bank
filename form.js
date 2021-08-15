
// call Submit button
document.getElementById('submit-btn').addEventListener('click', function () {

    // call email field

    const emailField = document.getElementById('mail');
    const emailText = emailField.value;

    // call password field

    const passwordFeild = document.getElementById('mail-password')
    const passWordText = passwordFeild.value;

    if (emailText == 'emon@gmail.com' && passWordText == 123456) {
        window.location.href = 'banking.html'

    } else {
        console.log('wrong!')
    }

})