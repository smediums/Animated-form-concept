const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', ()  =>
container.classList.add('right-panel-active')
);

signInButton.addEventListener('click', () =>
container.classList.remove('right-panel-active')

);

document.querySelector("button") 
.addEventListener("click",(e) => {
    e.preventDefault();
    
});

        // Sign in form to appear

function logIn(){
    document.getElementById('create').style.zIndex = 0
    container.classList.add('right-panel-active')
}

        // Redirect to signup form

const toSignUp = document.getElementById('Redirect');

toSignUp.addEventListener('click', () =>
document.getElementById('create').style.zIndex = 4
);

        // fade in buttons
        