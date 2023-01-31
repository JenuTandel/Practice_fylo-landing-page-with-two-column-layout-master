let emailRegex = /^[a-zA-Z][a-zA-Z0-9\-\_\.]+@[a-zA-Z0-9]{2,}\.[a-zA-Z0-9]{2,}$/;


function checkEmail(){
    let emailID = document.getElementById('emailID');
    let emailerrmsg = document.getElementById('emailerrmsg');

    if(!emailID.value.match(emailRegex)){
        emailerrmsg.classList.remove(['d-none']);
        emailerrmsg.classList.add(['block']);
        emailID.classList.remove(['border-dark']);
        emailID.style.border = '1px solid red';
    }
    else{
        emailerrmsg.classList.remove(['d-block']);
        emailerrmsg.classList.add(['d-none']);
        emailID.style.border = '1px solid black'
    }
}

function checkEmailSignin(){
    let emailSignin = document.getElementById('emailsignin');
    let emailerr = document.getElementById('emailerr')

    if(!emailSignin.value.match(emailRegex)){
        emailerr.classList.remove(['d-none']);
        emailerr.classList.add(['block']);
        emailSignin.classList.remove(['border-dark']);
        emailSignin.style.border = '1px solid red';
    }
    else{
        emailerr.classList.remove(['d-block']);
        emailerr.classList.add(['d-none']);
        emailSignin.style.border = 'none'
    }
}

