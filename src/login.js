const btnSignIn = document.getElementById("btn_sign_in");

function loginHandler(){
    const loginData = {
        Email: document.getElementById("inputEmail").value,
        Password: document.getElementById("inputPassword").value
    };
    sendHttpRequest('post', 'https://localhost:5001/api/Account/login', loginData);
}

function sendHttpRequest(method, url, data=null){
    const promise = new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open(method, url);
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.responseType = 'json';
        xhr.onload = function() {
            if(xhr.status >= 200 && xhr.status < 300){
                resolve(xhr.response);
            } else {
                reject(new Error('Something went wrong!'));
            }
        };
        xhr.send(JSON.stringify(data));
    });
    return promise;
}


btnSignIn.addEventListener('click', loginHandler);
