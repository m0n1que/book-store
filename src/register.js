const btn_register = document.getElementById('btn_register');
let email =  ''; 
let pswd = document.getElementById('inputPassword').value;
let cnfPswd = document.getElementById('inputPasswordConfirm').value;


function registerHandler(){ 
    email = document.getElementById('inputEmail').value; 
    pswd = document.getElementById('inputPassword').value;
    cnfPswd = document.getElementById('inputPasswordConfirm').value;
    
    if(pswd != cnfPswd) {
        alert('Password and Confirm Password does not match'); 
        return;
    }

    if(email!=null || email!=''){
        checkUserEmail(email);
    }
}

function checkUserEmail(userEmail){
    return fetch(`https://localhost:5001/api/Account/emailexists?email=${userEmail}`, {
        method: 'GET'
    }).then(response => {
        if(response.status >= 200 && response.status < 300){
            return response.json();
        }else{
            return response.json().then(errData => {
                console.log(errData);
                throw new Error('Something went wrong - server error');
            });
        }
    }).then(outData => {
        if(outData){
            alert('Email already exits in the system');
        }else{
            doRegisterUser();
        }
    });

}

function doRegisterUser(){
    const registerUSerData = {
        Email: email,
        Password: pswd,
        ConfirmPassword: cnfPswd,
        DisplayName: email
    };
    sendApiRequest('POST', 'https://localhost:5001/api/Account/register', registerUSerData);
}

function sendApiRequest(method, url, data = null){
    return fetch(url, {
        method: method, 
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(response => {
        if(response.status >= 200 && response.status < 300){
            return response.json();
        }else{
            return response.json().then(errData => {
                console.log(errData);
                throw new Error('Something went wrong - server error');
            });
        }
    }).then(outData => {
        localStorage.setItem('bks_token', outData.token);
        window.location.replace('https://localhost:8080/');
    });
}

btn_register.addEventListener('click', registerHandler);