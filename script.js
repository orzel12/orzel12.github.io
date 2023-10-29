function saveEmail() {
    const email = document.getElementById("emailInput").value;

    // Check if the email is valid (you can add more robust validation)
    if (validateEmail(email)) {
        // Send the email to the serverless function
        fetch('/.netlify/functions/submit-email', {
            method: 'POST',
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
    } else {
        alert("Invalid email address");
    }
}
