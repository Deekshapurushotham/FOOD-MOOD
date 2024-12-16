const form = document.getElementById('login-form');

form.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if(username === 'deeksha' && password === '123456789') {
        alert('Login successful! Redirecting to admin panel...');
     
    } else {
        alert('Invalid username or password. Please try again.');
    }
});