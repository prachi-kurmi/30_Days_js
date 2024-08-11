let isLogin = true;

document.getElementById('toggleButton').addEventListener('click', function() {
    isLogin = !isLogin;

    if (isLogin) {
        document.getElementById('formTitle').textContent = 'Login';
        document.getElementById('submitButton').textContent = 'Login';
        document.getElementById('toggleMessage').innerHTML = "Don't have an account? <span id='toggleButton'>Signup</span>";
    } else {
        document.getElementById('formTitle').textContent = 'Signup';
        document.getElementById('submitButton').textContent = 'Signup';
        document.getElementById('toggleMessage').innerHTML = "Already have an account? <span id='toggleButton'>Login</span>";
    }
});

document.getElementById('authForm').addEventListener('submit', function(event) {
    event.preventDefault(); 


    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (isLogin) {
        
        const savedUsername = localStorage.getItem('username');
        const savedPassword = localStorage.getItem('password');

        if (username === savedUsername && password === savedPassword) {
            document.getElementById('message').textContent = 'Login successful!';
            document.getElementById('message').style.color = 'green';
        
            window.location.href = "dashboard.html" 
        } else {
            document.getElementById('message').textContent = 'Login failed. Incorrect username or password.';
        }
    } else {
    
        localStorage.setItem('username', username);
        localStorage.setItem('password', password);
        document.getElementById('message').textContent = 'Signup successful! You can now login.';
        document.getElementById('message').style.color = 'green';
    }
});

document.addEventListener('click', function(event) {
    if (event.target && event.target.id === 'toggleButton') {
        isLogin = !isLogin;

        if (isLogin) {
            document.getElementById('formTitle').textContent = 'Login';
            document.getElementById('submitButton').textContent = 'Login';
            document.getElementById('toggleMessage').innerHTML = "Don't have an account? <span id='toggleButton'>Signup</span>";
        } else {
            document.getElementById('formTitle').textContent = 'Signup';
            document.getElementById('submitButton').textContent = 'Signup';
            document.getElementById('toggleMessage').innerHTML = "Already have an account? <span id='toggleButton'>Login</span>";
        }
    }
});
