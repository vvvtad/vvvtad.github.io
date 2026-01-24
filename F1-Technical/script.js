document.addEventListener('DOMContentLoaded', () => {
    const signupForm = document.querySelector('.signup form');
    const loginForm = document.querySelector('.login form');

    if (signupForm) {
        signupForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const name = document.getElementById('fname').value;
            const email = document.getElementById('email').value;

            if (name && email) {
                alert(`Welcome, ${name}. Your request has been received by the caption. Redirecting to login...`);
                window.location.href = 'login.html'; 
            }
        });
    }

    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const email = document.getElementById('email').value;
            const pass = document.getElementById('pass').value;

            if (email && pass) {
                alert("Access granted. Step into the galaxy.");
                window.location.href = 'home.html';
            } else {
                alert("Please provide your credentials to the admin.");
            }
        });
    }

    const lockIcons = document.querySelectorAll('.bxs-lock-alt');
    lockIcons.forEach(icon => {
        icon.style.cursor = 'pointer';
        icon.addEventListener('click', () => {
            const passInput = icon.previousElementSibling; 
            
            if (passInput.type === 'password') {
                passInput.type = 'text';
                icon.style.opacity = '1';
            } else {
                passInput.type = 'password';
                icon.style.opacity = '0.5';
            }
        });
    });
});