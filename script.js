function saveEmail() {
    const email = document.getElementById("emailInput").value;
    
    // Check if the email is valid (you can add more robust validation)
    if (validateEmail(email)) {
        // Send the email to the server for saving to an Excel file
        sendToServer(email);
    } else {
        alert("Invalid email address");
    }
}

function validateEmail(email) {
    // You can use a regular expression or a more advanced validation method here
    // This is a basic example
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
}

function sendToServer(email) {
    // You'll need to make an AJAX request to a server-side script (e.g., using Node.js, Python, etc.)
    // The server-side code will handle saving the email to an Excel file
    // For this example, I'll use a simplified fetch request.
    
    fetch('/saveEmail', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: email }),
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            alert("Email saved successfully");
        } else {
            alert("Error saving email");
        }
    });
}
