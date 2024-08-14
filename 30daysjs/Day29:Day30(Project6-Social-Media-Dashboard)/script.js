document.addEventListener('DOMContentLoaded', () => {
    const authForm = document.getElementById('authForm');
    const formTitle = document.getElementById('formTitle');
    const toggleButton = document.getElementById('toggleButton');
    const submitButton = document.getElementById('submitButton');
    const signupFields = document.getElementById('signupFields');
    const loginFields = document.getElementById('loginFields');
    const message = document.getElementById('message');
    const signupInputs = signupFields.querySelectorAll('input');
    const loginInputs = loginFields.querySelectorAll('input');

    let isLoginMode = true;

    toggleButton.addEventListener('click', () => {
        isLoginMode = !isLoginMode;

        if (isLoginMode) {
            formTitle.textContent = 'Login';
            submitButton.textContent = 'Login';
            signupFields.style.display = 'none';
            loginFields.style.display = 'block';

            
            signupInputs.forEach(input => input.removeAttribute('required'));

    
            loginInputs.forEach(input => input.setAttribute('required', true));
        } else {
            formTitle.textContent = 'Signup';
            submitButton.textContent = 'Signup';
            signupFields.style.display = 'block';
            loginFields.style.display = 'none';

            
            signupInputs.forEach(input => input.setAttribute('required', true));

            loginInputs.forEach(input => input.removeAttribute('required'));
        }
    });

    authForm.addEventListener('submit', (e) => {
        e.preventDefault();

        if (isLoginMode) {
            const username = document.getElementById('loginUsername').value;
            const password = document.getElementById('loginPassword').value;

            const userData = JSON.parse(localStorage.getItem(username));

            if (userData && userData.password === password) {
                message.textContent = 'Login successful!';
                setTimeout(() => {
                    window.location.href = 'dashboard.html';
                }, 1000); 
            } else {
                message.textContent = 'Invalid username or password.';
            }
        } else {
            const username = document.getElementById('signupUsername').value;
            const email = document.getElementById('signupEmail').value;
            const password = document.getElementById('signupPassword').value;
            const reenterPassword = document.getElementById('signupReenterPassword').value;

            if (password !== reenterPassword) {
                message.textContent = 'Passwords do not match.';
                return;
            }

            const userData = {
                username: username,
                email: email,
                password: password,
            };

            localStorage.setItem(username, JSON.stringify(userData));
            message.textContent = 'Signup successful! Logging you in...';

            setTimeout(() => {
                window.location.href = 'dashboard.html';
            }, 1000); 
        }
    });
});
