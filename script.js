document.getElementById('loginButton').addEventListener('click', function () {
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();
    const errorMessage = document.getElementById('errorMessage');

    // Simple validation
    if (username === "" || password === "") {
        errorMessage.textContent = "Both fields are required.";
        errorMessage.style.display = "block";
    } else if (username === "admin" && password === "12345") {
        errorMessage.style.display = "none";
        alert("Login successful!");
        // Redirect or perform another action
    } else {
        errorMessage.textContent = "Invalid username or password.";
        errorMessage.style.display = "block";
    }
});
