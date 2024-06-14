document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const username = document.getElementById("username").value.toLowerCase();
    const password = document.getElementById("password").value;
    
    const validCredentials = [
        { username: "oscar", password: "17" },
        { username: "tali", password: "1 año" },
        { username: "yuritzy", password: "7" }
    ];
    
    const isValid = validCredentials.some(cred => cred.username === username && cred.password === password);
    
    if (isValid) {
        window.location.href = "principal.html";
    } else {
        alert("Credenciales incorrectas. Inténtalo de nuevo.");
    }
});
