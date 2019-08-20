const changePasswordIcon = document.querySelector('#changePasswordIcon');
const passwordInput = document.querySelector('#password-input');
const usernameInput = document.querySelector('#username-input');
const myList = document.querySelector('#expense-list');
const loginButton = document.querySelector('#login-button');
const YOUR_USERNAME = '';
const YOUR_PASSWORD = '';

function presentAlert(message, item, userName, text) {
    const alertController = document.querySelector('ion-alert-controller');
    alertController.create({
        title: 'Getting Started',
        message: message,
        buttons: ['OK']
    }).then(alertControllerElement => {
        alertControllerElement.present();
        item.textContent = `${userName} ${text}`;
    })
}

changePasswordIcon.addEventListener('click', () => {
    changePasswordIcon.attributes['name']['nodeValue'] == 'eye' ?  
    
    (changePasswordIcon.attributes['name']['nodeValue'] = 'eye-off',
    passwordInput.attributes['type']['nodeValue'] = 'text') :
    
     (changePasswordIcon.attributes['name']['nodeValue'] = 'eye',
     passwordInput.attributes['type']['nodeValue'] = 'password' );
});

loginButton.addEventListener('click', () => {
    const usernameValue = usernameInput.value;
    const passwordValue = passwordInput.value;
    const newItem = document.createElement('ion-item');

    (usernameValue === YOUR_USERNAME && passwordValue === YOUR_PASSWORD) ?
    presentAlert(`Welcome ${usernameValue}`, newItem, usernameValue, 'loggin passed') :
    presentAlert(`Your credentials are wrong`, newItem, usernameValue, 'loggin failed');         
    
    myList.appendChild(newItem)
});