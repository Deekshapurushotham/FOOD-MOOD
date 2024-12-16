function login() {
    const form = document.querySelector('form');
 
    form.addEventListener('submit', function(event) 
    
    {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

  
    if (username === '' || password === '') {
        event.preventDefault();
    alert('Login successful!redirect to login panel...');
} else{
    alert('invalid username or password.');
}
});
}