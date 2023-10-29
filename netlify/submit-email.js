exports.handler = async (event) => {
    const { email } = JSON.parse(event.body);

    // You can add server-side email validation here

    // Save the email to a text file (you can change the storage method)
    const fs = require('fs');
    fs.appendFileSync('emails.txt', email + '\n');

    return {
        statusCode: 200,
        body: JSON.stringify({ success: true }),
    };
};
