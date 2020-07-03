const btnSignIn = document.getElementById("btn_sign_in");

function loginHandler(){
    const loginData = {
        Email: document.getElementById("inputEmail").value,
        Password: document.getElementById("inputPassword").value
    };
    sendHttpRequest('post', 'https://localhost:5001/api/Account/login', loginData);
}

function sendHttpRequest(method, url, data=null){
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


btnSignIn.addEventListener('click', loginHandler);
