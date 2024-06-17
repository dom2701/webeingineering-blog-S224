document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const users = [
        { username: 'admin', password: 'adminpass', role: 'admin' },
        { username: 'user', password: 'userpass', role: 'user' }
    ];
    const user = users.find(u => u.username === username && u.password === password);
    if (user) {
        alert(`Login erfolgreich! Willkommen, ${user.role}.`);
        if (user.role === 'admin') {
            window.location.href = 'home.html';
            localStorage.setItem("role", "admin");
        } else {
            window.location.href = 'home.html';
            localStorage.setItem("role", "user");
        }
    } else {
        document.getElementById('error-message').innerText = 'Ungültiger Benutzername oder Passwort';
    }
});